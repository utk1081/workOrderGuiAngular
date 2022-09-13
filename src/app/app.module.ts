import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import {HttpClientModule} from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
