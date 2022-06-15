import { Component, OnInit } from '@angular/core'
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup
  errorMessage: string

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  onLogin() {
    const email = this.loginForm.get('email').value
    const password = this.loginForm.get('password').value
    this.auth.login(email, password)
      .then(() => { this.router.navigate(['/']) })
      .catch(error => { this.errorMessage = error.message })
  }

}
