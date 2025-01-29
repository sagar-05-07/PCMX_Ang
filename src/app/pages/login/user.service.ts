import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private email: string;

  // UserService
  setEmail(email: string) {
    localStorage.setItem('userEmail', email);
  }

  getEmail(): string {
    return localStorage.getItem('userEmail') || '';
  }

}
