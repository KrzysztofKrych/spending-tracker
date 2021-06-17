import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { SpendingComponent } from './components/spending/spending.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AccountsComponent } from './components/accounts/accounts.component';

const routes: Routes = [
  { path: '', component: SpendingComponent },
  { path: 'spending', redirectTo: '', component: SpendingComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'accounts', component: AccountsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
