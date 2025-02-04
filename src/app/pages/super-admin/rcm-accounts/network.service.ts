import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(public http: HttpClient) { }

  GetNetworkAccount(filter: any) {
    return this.http.post(environment.apiUrl + "api/get-network-account", filter);
  }

  UpsertNetworkAccount(data: any) {
    return this.http.post(environment.apiUrl + "api/upsert-network-account", data);
  }
}
