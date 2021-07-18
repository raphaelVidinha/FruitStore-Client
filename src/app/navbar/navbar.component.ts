import { FruitService } from './../services/fruit.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Cart } from '../models/Cart';
import { Item } from '../models/Item';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  modalRef!: BsModalRef;
  public cart!: Cart;
  public totalOrder: number = 0;

  constructor(private auth: AuthService,
              private modalService: BsModalService,
              private service: FruitService) { }

  @Input() orders: any[] = [];
  @Input() items: Item[] = [];

  ngOnInit() {
  }

  isLoged(){
    return this.auth.logedIn();
  }

  returnRole()
  {
    return this.auth.verifyRole();
  }

  openModal(templateNested: any) {
    this.modalRef = this.modalService.show(templateNested);
    this.totalOrder = 0;
    this.orders.map(item => {
      this.totalOrder += item.total
    })
  }

  closeOrder(){
    if(this.items.length == 0){
      Swal.fire({
        title: 'Operação inválida.',
        text: 'Para fechar a compra é necessário adcionar itens ao carrinho de compras.',
        icon: 'info'
      })
    }
    const cart = new Cart(this.items, this.totalOrder);
    this.service.closeOrder(cart).subscribe(retorno => {
      Swal.fire({
        title: 'Sucesso.',
        text: 'Compra efetuada com sucesso.',
        icon: 'success'
      })
      setTimeout(() => {
        window.location.reload();
      }, 5000)
    })
  }

  logout(){
    this.auth.logout();
  }

}
