import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface TableData{
  data: number,
  time: string
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor(private http: HttpClient) { }

  deleteRecords(){
    return this.http.delete('https://heart-rate-73d27-default-rtdb.firebaseio.com/metrics.json');
  }

  postRecords(obj){
    return this.http.post('https://heart-rate-73d27-default-rtdb.firebaseio.com/metrics.json', obj);
  }

  fetchRecords(){
    return this.http.get<{[key: string]: TableData}>('https://heart-rate-73d27-default-rtdb.firebaseio.com/metrics.json');
  }
}
