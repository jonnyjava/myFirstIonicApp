import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Repo } from '../models/repo';

@Injectable()
export class GithubRepos {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) { }

  load(): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/repositories`).map(res => <Repo[]>res.json());
  }
  /*
  loadDetails(login: string): Observable<Repo> {
    return this.http.get(`${this.githubApiUrl}/repos/${login}`).map(res => <Repo>(res.json()))
  }
  Repo(searchParam: string): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/search/repos?q=${searchParam}`).map(res => <Repo[]>(res.json().items));
  }*/
}
