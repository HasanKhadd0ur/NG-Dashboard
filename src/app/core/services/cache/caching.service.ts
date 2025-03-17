import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CachingService {
  private cache = new Map<string, { data: Observable<any>, expiry: number }>();
  private cacheTTL = 5 * 60 * 1000;  

  constructor() {}

  get<T>(key: string): Observable<T> | null {
    const cached = this.cache.get(key);
    if (cached && cached.expiry > Date.now()) {// check for expiration 
      return cached.data;
    }
    this.cache.delete(key); 
    return null;
  }

  set<T>(key: string, data: Observable<T>) {
    this.cache.set(key, { data, expiry: Date.now() + this.cacheTTL });
  }

  invalidate(key: string) {
    this.cache.delete(key);
  }
}
