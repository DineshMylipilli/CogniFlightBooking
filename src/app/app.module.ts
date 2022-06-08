import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SearchComponent } from './search/search.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { AddflightComponent } from './addflight/addflight.component';
import { BlockflightComponent } from './blockflight/blockflight.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    SearchComponent,
    AdminDashboardComponent,
    BookingHistoryComponent,
    AddflightComponent,
    BlockflightComponent,
    ScheduleComponent,
    HomeDashboardComponent,
    BookticketComponent,
    CancelticketComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component:HomeDashboardComponent },
      { path: "register", component:RegisterComponent },
      { path: "login", component:LoginComponent },
      { path: "admin", component:AdminDashboardComponent },
      { path: "user", component:UserDashboardComponent },
      { path: "search", component:SearchComponent },
      { path: "history", component:BookingHistoryComponent },
      { path: "bookticket", component:BookticketComponent },
      { path: "addflight", component:AddflightComponent },
      { path: "blockflight", component:BlockflightComponent },
      { path: "schedule", component:ScheduleComponent },
      { path: "home", component:HomeDashboardComponent },
      { path: "cancel", component:CancelticketComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
