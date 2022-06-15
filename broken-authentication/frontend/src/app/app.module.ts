import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { LogInComponent } from './log-in/log-in.component'
import { AppViewComponent } from './app-view/app-view.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { AuthService } from './services/auth.service'
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: AppViewComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AppViewComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
