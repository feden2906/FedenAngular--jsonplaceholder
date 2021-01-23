import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {baseUrl} from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.baseUrl}/posts`);
  }

}



