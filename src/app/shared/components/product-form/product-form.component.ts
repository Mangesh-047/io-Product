import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ipcat, Iproduct } from '../../model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output()
  pInfo: EventEmitter<Iproduct> = new EventEmitter<Iproduct>()

  constructor() { }

  ngOnInit(): void {
  }

  onItemAdd(pn: HTMLInputElement, pd: HTMLTextAreaElement, cat: Ipcat){

      let obj : Iproduct= {
        pname: pn.value,
        pdesc: pd.value,
        pcat: cat
      }

      // console.log(obj);
      this.pInfo.emit(obj)
      pn.value = '';
      pd.value = '';
      
  }
}
