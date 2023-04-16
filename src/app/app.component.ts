import { Component } from '@angular/core';
import { Iproduct } from './shared/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ioProduct';

  productArray: Array<Iproduct> = [
    {
      pname: 'Samsung',
      pdesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem libero expedita magni quaerat illo facilis atque commodi, necessitatibus pariatur qui quia iste doloribus voluptatem, molestias nemo consectetur. Voluptates, et?',
      pcat: 'Product'
    },
    {
      pname: 'Iphone',
      pdesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem libero expedita magni quaerat illo facilis atque commodi, necessitatibus pariatur qui quia iste doloribus voluptatem, molestias nemo consectetur. Voluptates, et?',
      pcat: 'Catlog'
    }
  ];

  getProductAdd(data: Iproduct) {
    console.log(data);

    this.productArray.push(data)
  }
}
