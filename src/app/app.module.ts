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


import {MatIconModule} from '@angular/material/icon';
import { VideosComponent } from './components/videos/videos.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VideosComponent,
    ProductsComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'videos', component:VideosComponent},
    {path: 'products' , component:ProductsComponent},
    {path: 'contactus',component:ContactusComponent},
    {path: 'aboutus' , component: AboutusComponent}

    

    ]),
    MatInputModule,
    MatButtonModule,
    MatIconModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
