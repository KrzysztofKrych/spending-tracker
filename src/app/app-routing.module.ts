import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SpendingComponent } from './spending/spending.component';
import { CategoriesComponent } from './categories/categories.component';
import { AccountsComponent } from './accounts/accounts.component';


const routes: Routes = [
  {path: '' , component: SpendingComponent},
  {path: 'spending', redirectTo: '', component: SpendingComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'accounts', component: AccountsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
