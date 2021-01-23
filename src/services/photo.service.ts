import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../models/photo';
import {baseUrl} from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  baseUrl = baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  getAllPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${this.baseUrl}/photos`);
  }
}
