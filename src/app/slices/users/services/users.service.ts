import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../../../core/config/config.service';
import { User } from '../models/user';
import { map, Observable, shareReplay } from 'rxjs';
import { PaginatedResult } from '../../../core/models/PaginatedResult';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string ;
  private cache = new Map<number, Observable<User>>();

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { 

    this.url = `${this.config.apiEndpoint}/users`;
    
  }

  getUsers(page: number): Observable<PaginatedResult<User>> {
    return this.http.get<PaginatedResult<User>>(`${this.url}?page=${page}`)
      .pipe(map(response => response));
  }

  getUserById(id: number): Observable<User> {
    if (this.cache.has(id)) {
      return this.cache.get(id)!;
    }
    const request = this.http.get<{ data: User }>(`${this.url}/${id}`)
      .pipe(map(response => response.data), shareReplay(1));

    this.cache.set(id, request);
    return request;
  }

  addUser(data: User) {
    return this.http.post<User>(this.url, data);
  }

  updateUser(data: User, id: number) {
    return this.http.put<User>(`${this.url}/${id}`, data);
  }

  deleteUser(id: number) {
    return this.http.delete<number>(`${this.url}/${id}`);
  }

}
