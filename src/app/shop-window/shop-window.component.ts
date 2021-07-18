import { Item } from './../models/Item';
import { Cart } from './../models/Cart';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-shop-window',
  templateUrl: './shop-window.component.html',
  styleUrls: ['./shop-window.component.css']
})
export class ShopWindowComponent implements OnInit {

  public fruits: any;

  public cart!: Cart;
  public items: Item[] = [];
  public itemCart: any = {};
  public itemsCart: any[] = [];

  constructor(private service: FruitService) { }

  @Output() order = new EventEmitter();

  ngOnInit() {
    this.getFruits();
  }

  getFruits(){
    this.service.getFruits().subscribe(
      (response) => {
        this.fruits = response;
      }
    )
  }

  addToCart(id: number, name: string, price: number){
    const idInput = "input_" + id;
    const Input = <HTMLInputElement>document.getElementById(idInput);
    const valueInput:number = +Input.value;

    const item = new Item(id, valueInput);
    this.items.push(item);

    this.itemCart = {
      fruitId: id,
      name: name,
      qtd: valueInput,
      price: price,
      total: price * valueInput
    }
    this.order.emit(this.itemCart);
  }

}
