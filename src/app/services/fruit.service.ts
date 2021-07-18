import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fruit } from '../models/Fruit';


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  baseUrl = 'https://localhost:5001/v1/fruits/';
  baseUrlCart = 'https://localhost:5001/v1/cart/';

  constructor(private http: HttpClient) { }

  getFruits(){
    const token = this.getToken();
    return this.http.get(`${this.baseUrl}`, { headers: token }).pipe(
      map((response: any) => {
        return response;
      })
    )
  }

  getById(id:number): Observable<Fruit>{
    const token = this.getToken();
    return this.http.get(`${this.baseUrl}id:int?id=${id}`, { headers: token }).pipe(
      map((response) => {
        return response;
      })
    )
  }

  saveFruit(model: Fruit){
    const token = this.getToken();
    return this.http.post(this.baseUrl, model, { headers: token }).pipe(
      map((response) => {
        return response;
      })
    )
  }

  closeOrder(model: any) {
    const token = this.getToken();
    return this.http.post(`${this.baseUrlCart}add`, model, { headers: token }).pipe(
      map((response) => {
        return response;
      })
    )
  }

  upoad(file: File){
    const token = this.getToken();
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${this.baseUrl}upload`, formData, { headers: token }).pipe(
      map((response) => {
        return response;
      })
    )
  }

  updateFruit(id: number, model: Fruit){
    const token = this.getToken();
    return this.http.put(`${this.baseUrl}id:int?id=${id}`, model, { headers: token }).pipe(
      map((response) => {
        return response;
      })
    )
  }

  deleteFruit(id: number) {
    const token = this.getToken();
    return this.http.delete(`${this.baseUrl}id:int?id=${id}`, { headers: token }).pipe(
      map((response) => {
        return response;
      })
    )
  }

  getToken(){
    return new HttpHeaders({'Authorization':`Bearer ${localStorage.getItem('token')}`});
  }

}
