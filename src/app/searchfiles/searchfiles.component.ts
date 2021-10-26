import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FileMetaData } from '../Models/FileMetaData';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-searchfiles',
  templateUrl: './searchfiles.component.html',
  styleUrls: ['./searchfiles.component.css']
})
export class SearchfilesComponent implements OnInit {

  fileSearchForm: FormGroup;
  dataSource = new MatTableDataSource<FileMetaData>();
  displayedColumns: string[] = ['File Name', 'File Type', 'Meta Uplaoded', 'Size'];
  tempDataSource = [];
  constructor(private fb: FormBuilder,
    private fileService: FilesService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.buildForm();
    if (this.fileService.getFilesList()) {
      this.tempDataSource = this.fileService.getFilesList();
      this.dataSource.data = this.tempDataSource;

    }
  }

  buildForm() {
    this.fileSearchForm = this.fb.group({
      fileName: ['']
    })
  }

  searchFiles() {
    if (this.fileSearchForm.controls.fileName.value && this.fileSearchForm.controls.fileName.value.length > 1) {
      this.dataSource.filter = this.fileSearchForm.controls.fileName.value;
    } else {
      this.tempDataSource = this.fileService.getFilesList();
      this.dataSource.data = this.tempDataSource;
      this.cdr.detectChanges();

    }
  }
}
