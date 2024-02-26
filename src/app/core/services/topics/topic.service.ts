import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, mergeMap, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

// https://hacker-news.firebaseio.com/v0/item/23900968.json?print=pretty
@Injectable({
  providedIn: 'root',
})
export class TopicService {
  baseUrl = environment.endpoint;
  constructor(private httpClient: HttpClient) {}

  retrieveTopics(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/askstories.json`).pipe(
      mergeMap((ask: any) => {
        const item$ = ask.slice(0, 20).map((i: number) => {
          return this.getTopic(i);
        });
        return forkJoin(item$);
      }, 20)
    );
  }

  getTopic(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/item/${id}.json`);
  }

  getComments(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/item/${id}.json`).pipe(
      mergeMap((ask: any) => {
        const item$ = ask.kids.map((i: number) => {
          return this.getTopic(i);
        });
        return forkJoin(item$);
      }, 20)
    );
  }
}
