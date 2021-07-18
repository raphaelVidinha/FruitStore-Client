import { FruitService } from './../services/fruit.service';
import { Component, OnInit } from '@angular/core';
import { Fruit } from '../models/Fruit';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  isSave: boolean = false;
  isEdit: boolean = false;
  isList: boolean = true;

  fruits: any;
  model: any = {};

  public file!: File;

  constructor(private service: FruitService) {}

  ngOnInit() {
    this.getFruits();
  }

  getFruits() {
    this.service.getFruits().subscribe(
      (response) => {
        this.fruits = response;
      }
    )
  }

  create() {
    this.isSave = true;
    this.isEdit = false;
    this.isList = false;
  }

  save() {

    const obj = Object.assign({}, this.model);
    this.service.upoad(this.file).subscribe();
    const nameFile = this.model.image.split('\\', 3);
    this.model.image = nameFile[2];
    if(!obj.id){
      this.service.saveFruit(obj).subscribe(
        (response) => {
          this.getFruits();
          this.isSave = false;
          this.isEdit = false;
          this.isList = true;
        }
      )
    }else{
      this.service.updateFruit(this.model.id, obj).subscribe(
        (response) => {
          this.getFruits();
          this.isSave = false;
          this.isEdit = false;
          this.isList = true;
        }
      )
    }

  }

  getById(id: number){
    this.service.getById(id).subscribe(
      (response) => {
        const obj = Object.assign({}, response);
        this.model = obj;

        this.isSave = false;
        this.isEdit = true;
        this.isList = false;
      }
    )
  }

  delete(id: number){
    this.service.deleteFruit(id).subscribe(
      (response) => {
        this.getFruits();
      }
    )
  }

  onFileChanges(event: any){
    const reader = new FileReader();

    if(event.target.files && event.target.files.length)
    {
      this.file = event.target.files[0];
      this.model.image = this.file.name;
    }
  }

}
