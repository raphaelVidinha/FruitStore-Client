import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  isLoged(){
    return this.auth.logedIn();
  }

  returnRole()
  {
    return this.auth.verifyRole();
  }

  logout(){
    this.auth.logout();
  }

}
