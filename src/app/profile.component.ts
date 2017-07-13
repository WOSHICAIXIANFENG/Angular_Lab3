/**
 * Created by Samuel on 13/7/2017.
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { DBService } from './service/db.service';

@Component({
  selector: 'app-profile',
  template: `
    <h4> Student id = {{id}}</h4>
    <p>
      Student information : {{getInfo()}}
    </p>
  `,
  providers:[DBService]
})

export class ProfileComponent {
  // Read Route parameters from ActivateRoute
  // We will use Observable as wrapper to subscribe to param changes
  private subscription: Subscription;
  id: string;
  item: any;

  constructor(private activatedRoute: ActivatedRoute, private db: DBService) {
    // params will return an Observable
    // we need it so we track changes in parameters as this code will be run once at constructor
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getInfo() {
    return this.item = JSON.stringify(this.db.getInfo(this.id));
  }
}
