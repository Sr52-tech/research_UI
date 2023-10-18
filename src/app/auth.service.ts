import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   API_LINK = 'http://localhost:3000/api';

  constructor() { }
  // API Calls
  login(username: string, password: string) {
    const credentials = {
      username: username,
      password: password
    }
    return fetch(this.API_LINK+'/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  }
  logout() {

  }
  register(email: string, password: string, name: string, password_confirmation: string) {
    const credentials = {
      email: email,
      password: password,
      name: name,
      password_confirmation: password_confirmation

    }
    return fetch(this.API_LINK+'/register', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
