import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  constructor(private service: CommonServiceService) {}

  ngOnInit(): void {
    this.service.getProduct().subscribe((res) => {
      this.productList = res;
    });
  }
}
