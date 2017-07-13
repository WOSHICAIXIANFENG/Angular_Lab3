import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {Router} from "@angular/router";

@Injectable()
export class MyCanActivateGuard implements CanActivate {
  private id: string;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log("route.params.id = " + route.params['id']);
    this.id = route.params['id'];
    if (this.id !== '1') {
      console.log(route);
      console.log(state);
      //return alert('Your id is wrong --- id = ' + this.id);
      let result = confirm("You id is wrong!! --- id = " + this.id);
      console.log("confirm.result = " + result);
      // user click OK button
      if (result) {
        this.router.navigate(['/error']);
      }
      return result;
    } else {
      return true;
    }
  }
}
