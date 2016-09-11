import { Injectable } from '@angular/core';
import { Http, RequestOptions, ResponseContentType, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL: string = 'http://127.0.0.1:9000';

@Injectable()
export class PeopleService {

  constructor(private http: Http) {}

  fetch() {
    return this.http.get(`${BASE_URL}/api/peoples`)
      .map( res => res.json() );
  }

  fetchRandom() {
    return this.http.get(`${BASE_URL}/api/peoples/random`)
      .map( res => res.json() );
  }

  fetchOne(id: number) {
    return this.http.get(`${BASE_URL}/api/peoples/${id}`)
      .map( res => res.json() );
  }

  delete(id: number) {
    return this.http.delete(`${BASE_URL}/api/peoples/${id}`)
      .map( res => res.json() );
  }

  update(person: any) {
    return this.http.put(`${BASE_URL}/api/peoples/${person.id}`, person)
      .map( res => res.json() );
  }

  create(person: any) {
    let requestOptions = { headers: new Headers({'Content-Type': 'application/json'})};
    return this.http.post(`${BASE_URL}/api/peoples`, JSON.stringify(person), requestOptions)
      .map( res => res.json() );
  }
}
