import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any
  constructor(private apiService: ProductService) { }

  ngOnInit(): void {
    this.apiService.getItems().subscribe((data: any) => {
      this.items = data;
      console.log(this.items)
    });
  }

}
