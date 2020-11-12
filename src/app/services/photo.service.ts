import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Photo } from "../interfaces/photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = 'http://localhost:4000/api/photos'

  constructor(public http:HttpClient) { }

  createPhoto(title: string, description:string, photo: File ){
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('image', photo)
    return this.http.post(this.URI, formData)
  }

  getPhotos(){
    return this.http.get<Photo[]>(this.URI)
  }

  getPhoto(id: string){
    return this.http.get<Photo>(`${this.URI}/${id}`)
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updatePhoto(id: string, title: string, description: string) {
    return this.http.put(`${this.URI}/${id}`, {title, description});
  }
}
