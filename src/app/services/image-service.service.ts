import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { HttpServiceService } from './http-service.service';
import { FileResponse } from '../models/file.response';
import { SafeUrl } from '@angular/platform-browser';
import { FilePath } from '../models/file.path';

export interface LoadFile {
  file:File[],
  loading:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  public loadFile:Subject<LoadFile>=new Subject();
  safeImage!:SafeUrl;
  constructor(
    private httpService:HttpServiceService
  ) { }

  uploadImage(file:File){
    const form=new FormData();
    form.append('file',file);

    return this.httpService.post(form,'/images/upload')
    .pipe(map<any,FileResponse>(val=>{return val}));
  }


  getImage(id_file:string):Observable<FilePath[]>{
    return this.httpService.get(`/images/getImage/${id_file}`)
    .pipe(map<any,FilePath[]>(value=>{return value}))
  }
}
