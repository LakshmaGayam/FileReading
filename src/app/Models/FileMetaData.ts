export class FileMetaData {
    fileName: string;
    fileType:string;
    fileSize:string;
    fileLastModified: number;
    fileBase64:string;

    constructor(fileName: string , fileType:string , fileSize:string ,fileLastModified: number , fileBase64:string) {
        this.fileName = fileName
        this.fileType = fileType;
        this.fileSize = fileSize;
        this.fileLastModified = fileLastModified;
        this.fileBase64 = fileBase64;
    }
}