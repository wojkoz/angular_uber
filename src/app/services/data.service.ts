import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Course{
  origin: String,
  destination: String,
  price: Number,
  userName: String,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://uber-ac-wk-mk.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url + '/courses');
  }

  getByUser(userName) {
    return this.http.get(this.url + '/courses/' + userName);
  }

  createOrUpdate(course) {
    return this.http.post(`${this.url}/courses`, course);
  }
}
