import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl} from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.baseUrl}/posts`);
  }
}
