import { AfterViewInit, Component } from '@angular/core';
import { Product } from './common/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Show Product';

  products: Product[] = [
    {name: 'Dung', quantity: 100, price: 1000},
    {name: 'Dung1', quantity: 1001, price: 10001},
    {name: 'Dung2', quantity: 1002, price: 10002},
    {name: 'Dung3', quantity: 1003, price: 10003},
    {name: 'Dung4', quantity: 1004, price: 10004}
  ]

  ngAfterViewInit(): void {
    this.render(this.show);
  }

  show(innerHTML: string){
    let item = document.querySelector('#list');
    if (item) {
      item.innerHTML = innerHTML;
    }
  }

  render(callback: (data: string)=> any){
    let product = this.products.map(item => {
      return `
      <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
      </tr>
      `;
    }).join('');

    callback(product);
  }



}
