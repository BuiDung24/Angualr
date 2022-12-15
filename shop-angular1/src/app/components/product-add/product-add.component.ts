import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      'productCode': new FormGroup(null),
      'productName': new FormGroup('123-123')
    });
  }

  ngOnInit() {
  }

}
