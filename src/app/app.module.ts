import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { StoreModule } from '@ngrx/store';
import spendingReducer from './reducers/spending.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      spending: spendingReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
