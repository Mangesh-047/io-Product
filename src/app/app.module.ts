import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
