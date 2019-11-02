import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagePrincipalComponent } from './pagePrincipal/pagePrincipal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
@NgModule({
   declarations: [
      AppComponent,
      PagePrincipalComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatCardModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
