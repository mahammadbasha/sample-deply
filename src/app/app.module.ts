import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  import { HomeComponent } from './home/home.component';
import { EmploginComponent } from './BankEmployee/emplogin/emplogin.component';
import { CustloginComponent } from './Customer/custlogin/custlogin.component';
import { DepositsComponent } from './Customer/deposits/deposits.component';
import { WithdrawComponent } from './Customer/withdraw/withdraw.component';
import { TransferComponent } from './Customer/transfer/transfer.component';
import { StatementComponent } from './Customer/statement/statement.component';
import { BalanceComponent } from './Customer/balance/balance.component';
import { CusthomepageComponent } from './Customer/custhomepage/custhomepage.component';
import { HttpClientModule } from '@angular/common/http';
 import { AuthServiceService } from './auth-service.service';
import { EmphomepageComponent } from './BankEmployee/emphomepage/emphomepage.component';
import { ViewCustomerDetailsComponent } from './BankEmployee/view-customer-details/view-customer-details.component';
import { ViewAccountDetailsComponent } from './BankEmployee/view-account-details/view-account-details.component';
import { FormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './BankEmployee/create-customer/create-customer.component';
import { CreateAccountComponent } from './BankEmployee/create-account/create-account.component';

@NgModule({
  declarations: [

    AppComponent,
     HomeComponent,
     EmploginComponent,
     CustloginComponent,
     DepositsComponent,
     WithdrawComponent,
     TransferComponent,
     StatementComponent,
     BalanceComponent,
     CusthomepageComponent,
     EmphomepageComponent,
     ViewCustomerDetailsComponent,
     ViewAccountDetailsComponent,
     CreateCustomerComponent,
     CreateAccountComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }