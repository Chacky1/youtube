import { Component, OnInit } from '@angular/core'
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup
  errorMessage: string

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  onSignup() {
    const email = this.signupForm.get('email').value
    const password = this.signupForm.get('password').value
    this.auth.createNewUser(email, password)
      .then(() => { this.router.navigate(['/']) })
      .catch(error => { this.errorMessage = error.message })
  }

}
