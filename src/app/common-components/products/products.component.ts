import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  searchKey: string = '';
  constructor(
    private service: CommonServiceService,
    private cartS: CartService
  ) {}

  ngOnInit(): void {
    this.service.getProduct().subscribe((res) => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
    this.cartS.search.subscribe((value: any) => {
      this.searchKey = value;
    });
  }

  addtoCart(item: any) {
    this.cartS.addtoCart(item);
  }
}
