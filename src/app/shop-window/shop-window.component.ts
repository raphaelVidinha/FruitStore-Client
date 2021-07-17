import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-window',
  templateUrl: './shop-window.component.html',
  styleUrls: ['./shop-window.component.css']
})
export class ShopWindowComponent implements OnInit {

  public fruits: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFruits();
  }

  getFruits(){
    this.http.get('https://localhost:5001/v1/fruits').subscribe(response => {
      this.fruits = response;
    })
  }

}
