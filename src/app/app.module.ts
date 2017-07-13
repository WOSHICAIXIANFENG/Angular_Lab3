import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';
import { ProfileComponent } from './profile.component';
import { ErrorComponent} from './error.component';

// Import our Routes file
import { myRoutes } from "./app.routes";

import { MyCanActivateGuard } from "./guard/mycanactivate.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent
  ],

  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [MyCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
