import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileMetaData } from '../Models/FileMetaData';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  screenType = 'upload';
  displayedColumns: string[] = ['File Name', 'File Type', 'Meta Uplaoded', 'Size'];
  displayedDownLoadColums: string[] = ['File Name', 'File Type', 'Meta Uplaoded', 'Size', 'DownLoad'];

  selectedFiles = [];
  @ViewChild('fileChange') myInputFileVariable: ElementRef;

  ELEMENT_DATA: FileMetaData[] = [];
  dataSource: any[] = [];
  filesList: FileMetaData[];
  fileType: string;
  extensionType: string;
  binaryString: string;

  constructor(private datePipe: DatePipe,
    private fileService: FilesService,
    private cdr: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.filesList = [];
  }

  /**
   * 
   * @param screen 
   */
  showScreenType(screen: string) {
    if (screen === 'upload') {
      this.screenType = screen;
    } else {
      this.screenType = screen;
    }
  }

  /**
   * 
   * @param event 
   */
  uploadFile(event: any) {
    this.selectedFiles = event.target.files;

    for (let i = 0; i < this.selectedFiles.length; i++) {
      if (this.selectedFiles && this.selectedFiles.length > 0) {
        this.fileType = this.selectedFiles[i].type;
        if (this.fileType === 'application/pdf') {
          this.extensionType = 'data:application/pdf;base64,';
        } else if (this.fileType === 'image/jpeg' || 'image/jpg') {
          this.extensionType = 'data:image/jpeg;base64,';
        } else if (this.fileType === 'image/png') {
          this.extensionType = 'data:image/png;base64,';
        } else {
          this.extensionType = '';
        }
        
          this.upload( i ,this.selectedFiles[i])
       
      }
    }
    if (this.myInputFileVariable) {
      this.myInputFileVariable.nativeElement.value = '';
    }

  }

  _handleReaderLoadedSign(readerEvt) {
    this.binaryString = readerEvt.target.result;
   
  }

  upload(i:number ,file: any) {
    var re = /(?:\.([^.]+))?$/;
    const reader = new FileReader();
        reader.onload = this._handleReaderLoadedSign.bind(this);
        reader.readAsBinaryString(this.selectedFiles[i]);

        // reader.onload = () => {
          setTimeout(() => {
            this.ELEMENT_DATA.push(
              {
                fileName: this.removeFileExtensions(file.name),
                fileSize: this.fileSizeCalculation(file.size),
                fileType: re.exec(file.name)[1],
                fileLastModified: this.concetMilliSectoDate(file.lastModified),
                fileBase64: this.extensionType + btoa(this.binaryString) ,
                fileFullName: file.name
              })
            this.dataSource = this.ELEMENT_DATA;
            this.fileService.setFilesList(this.dataSource);
          },1000 );
          this.cdr.detectChanges();
    

  }

  /**
   * 
   * @param fileName 
   * @returns fileName 
   */
  removeFileExtensions(fileName: string): string {
    return fileName.split('.').slice(0, -1).join('.');
  }

  /**
   * 
   * @param bytes 
   * @param decimals 
   * @returns 
   */

  fileSizeCalculation(bytes: any, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  /**
   * @param modifiedDate
   */
  concetMilliSectoDate(modifiedDate: number): any {

    return this.datePipe.transform(modifiedDate, 'dd-MMM-yyyy h:mm a');

  }


  downLoadFile(i) {
    console.log(this.ELEMENT_DATA[i])
    if (this.ELEMENT_DATA[i].fileType === 'application/pdf'
    || this.ELEMENT_DATA[i].fileType === 'image/jpeg' 
    || this.ELEMENT_DATA[i].fileType === 'image/png') {
      const source = this.ELEMENT_DATA[i].fileBase64;
      const link = document.createElement("a");
      link.href = source;
      link.download = `${this.ELEMENT_DATA[i].fileName}.${this.ELEMENT_DATA[i].fileType.slice(this.ELEMENT_DATA[i].fileType.indexOf('/')).slice(1) }`
      link.click();
    } else  {
      this.saveData(this.ELEMENT_DATA[i].fileBase64 , this.ELEMENT_DATA[i].fileFullName , '.docx');
    }
  }

  base64toBlob(byteString) {
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: "octet/stream" });
  }

  saveData(fileBase64:string , fileName: string , extensionType:string) {
    console.log("Here")
    var a = document.createElement("a");
    document.body.appendChild(a);
    // a.style = "display: none";
    const tempBase64 =  fileBase64.replace('data:image/jpeg;base64,' , '')
      var json = atob(tempBase64),
        blob = this.base64toBlob(json),
        url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
  }
    
}
