/**
 * Created by Samuel on 13/7/2017.
 */
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentsComponent } from "./students.component";
import { ProfileComponent } from "./profile.component";

const MY_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  // A redirect route requires a pathMatch property to tell the router how to match a URL to the path of a route.
  // The default matching strategy of Angular router is
  // to match the redirect route when the URL begins with the redirect route's prefix path.
  // if 'prefix' all params/routes/xx will be redirected to homepage
  { path: 'students/profile/:id', component: ProfileComponent },
  // guards need to be initilized, add them to module!
  // canActivate when surfing to route
  // canDeactivate when surfing away from route
  //{ path: 'guards', component: GuardsComponent, canActivate:[MyCanActivateGuard], canDeactivate: [MyCanDeactivateGuard] },
  // ** for all routes that we don't recognize,
  // Routes served from top to bottom so this should always come last!
  { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
