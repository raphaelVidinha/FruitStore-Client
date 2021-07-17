import { AuthService } from './../services/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logar(){
    this.authService.login(this.model).subscribe(
      () => {

      },
      error => {

      }
    )
  }

}
