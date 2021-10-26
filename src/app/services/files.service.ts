import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  filesList = [];
  constructor() { }

  setFilesList(filesList) {
    this.filesList = filesList;
    console.log(this.filesList , 'In service')
  }

  getFilesList() {
    return this.filesList;
  }
}
