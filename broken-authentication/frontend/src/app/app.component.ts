import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'

import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public isAuth: boolean
  private isAuthSub: Subscription

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.auth.isAuth$.next(false)
    this.auth.userId = ''
    this.auth.token = ''
    this.isAuthSub = this.auth.isAuth$.subscribe(
      auth => { this.isAuth = auth }
    )
  }

  ngOnDestroy() {
    this.isAuthSub.unsubscribe()
  }

  onLogout() {
    this.auth.logout()
    this.router.navigate(['/'])
  }

}
