import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from '@angular/forms';


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
import { firebaseConfig } from './api/firebaseConfig';
import { InitProvider } from './providers/initProvider';
import { CategoryPipe } from './pipes/categoryPipe';
import { InputComponent } from './components/input/input.component';
import { EditableSpanComponent } from './components/editable-span/editable-span.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';


export function initProviderFactory(provider: InitProvider) {
  return () => {
    provider.loadSpending();
    provider.loadCategories();
  }
}

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
    CategoryPipe,
    InputComponent,
    EditableSpanComponent,
    ModalComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      spending: spendingReducer,
      categories: categoriesReducer
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [InitProvider,
    { provide: APP_INITIALIZER, useFactory: initProviderFactory, deps: [InitProvider], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
