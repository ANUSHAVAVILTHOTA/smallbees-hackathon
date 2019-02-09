import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// routing module
import {RouterModule} from '@angular/router';



// material design modules imports
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './products/products/products.component';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import { ProductpageComponent } from './products/productpage/productpage.component';
import { ThresherComponent } from './products/thresher/thresher.component';
import { PloughComponent } from './products/plough/plough.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductpageComponent,
    ThresherComponent,
    PloughComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'productpage', component: ProductpageComponent},
    {path: 'thresher', component: ThresherComponent},
    {path: 'plough', component: PloughComponent}

    ]),
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
