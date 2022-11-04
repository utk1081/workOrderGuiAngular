import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    invalidLogin = false;
    username = '';
    password = '';

    constructor(private loginService: AuthenticationService, private router: Router) { }

    ngOnInit(): void {}

    checkLogin() {
        this.loginService.authenticate(this.username, this.password).subscribe({
            next: data => {
                this.router.navigate([''])
                this.invalidLogin = false
            },
            error: error => {
                this.invalidLogin = true;
            }
        });
    }

}
