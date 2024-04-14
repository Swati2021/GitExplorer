import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  baseUrl = "https://api.github.com/";

  constructor(
    private httpClient: HttpClient
  ) {}

  setLoading(isLoading: boolean) {
    this.loadingSubject.next(isLoading);
  }

  getUser(githubUsername: string) {
    return this.httpClient.get(`${this.baseUrl}users/${githubUsername}`);
  }

  getRepositries(url: string, page: number, pageSize: any) {
    return this.httpClient.get(`${url}?page=${page}&per_page=${pageSize}`);
  }
}
