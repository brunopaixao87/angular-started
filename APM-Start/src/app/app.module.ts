import { ProductGuardService } from './products/product-guard.service';
import { ProductResource } from './products/product.resource';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';

import { ProductService } from './products/product.service';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { appRoutes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacesPipe,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    ProductResource,
    ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
