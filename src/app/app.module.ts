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
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductsComponent } from './products/products/products.component';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import { ProductpageComponent } from './products/productpage/productpage.component';
import { ThresherComponent } from './products/thresher/thresher.component';
import { PloughComponent } from './products/plough/plough.component';


import {MatTabsModule} from '@angular/material/tabs'; 

import {MatIconModule} from '@angular/material/icon';
import { VideosComponent } from './components/videos/videos.component';
import { ContactusComponent } from './components/contactus/contactus.component';


import {MatFormFieldModule} from '@angular/material/form-field'; 





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductpageComponent,
    ThresherComponent,
    PloughComponent,
    ProductsComponent,
    ContactusComponent,
    VideosComponent,
    AboutusComponent
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
    {path: 'plough', component: PloughComponent},
    {path: 'videos', component: VideosComponent},
    {path: 'products' , component: ProductsComponent},
    {path: 'contactus', component: ContactusComponent},
    {path: 'aboutus' , component: AboutusComponent}


    ]),
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
