import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/demo/adonisServices/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    email: string;
    password: string;

    valCheck: string[] = ['remember'];
    loginForm: FormGroup;

    constructor(public layoutService: LayoutService, private authService: AuthService, private router: Router, private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
          });
     }

    onLogin() {
        const loginData = this.loginForm.value;
        console.log(loginData)
        this.authService.login(loginData.email, loginData.password).subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/']);
          },
          err => {
            console.log(err)
            alert('Invalid email/password');
          }
        );
      }


}
