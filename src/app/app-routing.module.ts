import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
 import { EmploginComponent } from './BankEmployee/emplogin/emplogin.component';
import { CustloginComponent } from './Customer/custlogin/custlogin.component';
import { DepositsComponent } from './Customer/deposits/deposits.component';
import { WithdrawComponent } from './Customer/withdraw/withdraw.component';
import { TransferComponent } from './Customer/transfer/transfer.component';
import { StatementComponent } from './Customer/statement/statement.component';
import { BalanceComponent } from './Customer/balance/balance.component';
import { CusthomepageComponent } from './Customer/custhomepage/custhomepage.component';
import { CreateCustomerComponent } from './BankEmployee/create-customer/create-customer.component';
import { CreateAccountComponent } from './BankEmployee/create-account/create-account.component';
import { ViewCustomerDetailsComponent } from './BankEmployee/view-customer-details/view-customer-details.component';
import { ViewAccountDetailsComponent } from './BankEmployee/view-account-details/view-account-details.component';
import { EmphomepageComponent } from './BankEmployee/emphomepage/emphomepage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer-login', component: CustloginComponent },
  {path:'bankemployee-login',component:EmploginComponent},
  { path: 'deposits', component: DepositsComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'statement', component: StatementComponent },
  { path: 'balance', component: BalanceComponent },
  {path: 'custhomepage', component:CusthomepageComponent },
  {path: 'emphomepage', component:EmphomepageComponent},
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'view-customer-details', component: ViewCustomerDetailsComponent },
  { path: 'view-account-details', component: ViewAccountDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
