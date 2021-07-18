import { Component, OnInit } from '@angular/core';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-shop-window',
  templateUrl: './shop-window.component.html',
  styleUrls: ['./shop-window.component.css']
})
export class ShopWindowComponent implements OnInit {

  public fruits: any;

  constructor(private service: FruitService) { }

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

}
