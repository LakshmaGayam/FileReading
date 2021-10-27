export class FileMetaData {
    fileName: string;
    fileType:string;
    fileSize:string;
    fileLastModified: number;
    fileFullName: string
    fileBase64:string;

    constructor(fileName: string , fileType:string ,
         fileSize:string ,fileLastModified: number ,
          fileBase64:string , fullName:string) {
        this.fileName = fileName
        this.fileType = fileType;
        this.fileSize = fileSize;
        this.fileLastModified = fileLastModified;
        this.fileBase64 = fileBase64;
        this.fileFullName = fullName;
    }
}