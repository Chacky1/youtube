import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
  
  isAuth$ = new BehaviorSubject<boolean>(false)
  token: string
  userId: string

  constructor (private router: Router, private http: HttpClient) {

  }

  createNewUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/auth/signup', { email: email, password: password })
        .subscribe(
          () => { 
            this.login(email, password)
              .then(() => { resolve(1) })
              .catch(error => { reject(error) })
          },
          error => {
            reject(error)
          }
        )
    })
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/auth/login', { email: email, password: password })
        .subscribe(
          (authData: { token: string, userId: string }) => {
            this.token = authData.token
            this.userId = authData.userId
            this.isAuth$.next(true)
            resolve(1)
          },
          error => {
            reject(error)
          }
        )
    })
  }

  logout () {
    this.isAuth$.next(false)
    this.userId = null
    this.token = null
  }

}