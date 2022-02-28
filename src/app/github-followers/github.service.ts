import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubUser } from './github-user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private url: string = 'https://api.github.com/users/codewithz/followers'
  constructor(private http: HttpClient) { }

  getFollowers() {
    return this.http.get<GithubUser[]>(this.url);
  }

}
