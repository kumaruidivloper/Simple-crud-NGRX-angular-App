import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get(this.baseURL + '/users');
  }

  getUserById(id: number) {
    return this.httpClient.get(this.baseURL + '/users/' + id);
  }

  updateUserById(id: number, user: any) {
    return this.httpClient.put(this.baseURL + '/users/' + id, user);
  }

  deleteUserById(id: number) {
    return this.httpClient.delete(this.baseURL + '/users/' + id);
  }

  createUser(user: any) {
    return this.httpClient.post(this.baseURL + '/users', user);
  }
}
