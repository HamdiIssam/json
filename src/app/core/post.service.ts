import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
baseUrl='assets/Api/TF1-'
  constructor(private http:HttpClient) { }


updatePost(post:Post,id:Date):Observable<Post>{
  return this.http.patch<Post>(this.baseUrl+`${id}.json`,post)
}

getAllPost(id: string):Observable<Post[]>{
  return this.http.get<Post[]>(this.baseUrl+`${id}.json`)
}


}
