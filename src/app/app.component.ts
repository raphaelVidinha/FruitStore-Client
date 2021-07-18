import { AuthService } from './services/auth.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Item } from './models/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: string = 'FruitStore';
  public role: any = "";
  public ordersList: any[] = [];
  public items: Item[] = [];

  constructor(private auth: AuthService){}

  ngOnInit() {
    this.role = this.auth.verifyRole();
  }

  isLoged(){
    return this.auth.logedIn();
  }

  receberPedido(valor:any) {
    this.ordersList.push(valor);

    const item = new Item(valor.fruitId, valor.qtd);
    this.items.push(item);
  }

}
