import { AuthService } from './services/auth.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: string = 'FruitStore';
  public role: any = "";

  constructor(private auth: AuthService){}

  ngOnInit() {
    this.role = this.auth.verifyRole();
  }

  isLoged(){
    return this.auth.logedIn();
  }

}
