import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';


// COMPONENTS
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { SpendingComponent } from './components/spending/spending.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { AddTransactionFormComponent } from './components/add-transaction-form/add-transaction-form.component';
import { SwitcherComponent } from './components/switcher/switcher.component';

// REDUCERS
import spendingReducer from './reducers/spending.reducer';
import categoriesReducer from './reducers/categories.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainMenuComponent,
    TransactionsComponent,
    SpendingComponent,
    CategoriesComponent,
    AccountsComponent,
    ProgressBarComponent,
    ButtonComponent,
    AddTransactionFormComponent,
    SwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      spending: spendingReducer,
      categories: categoriesReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
