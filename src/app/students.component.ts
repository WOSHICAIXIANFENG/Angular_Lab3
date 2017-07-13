import { Component, OnInit } from '@angular/core';
import { DBService } from './service/db.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-students',
  template: `
    <h3>Show student list</h3>
    <ul>
      <li *ngFor="let item of items"><a [routerLink]="['profile', item.id]">{{item.name}}</a></li>
    </ul>
    <br/>
    <button (click)="onNavigate()">Go Home</button>
  `,
  styles: [],
  providers: [DBService]
})
export class StudentsComponent implements OnInit {
  private items: any;

  constructor(private db: DBService, private router: Router) { }

  ngOnInit() {
    this.items = this.db.getData();
  }

  onNavigate() {
    // Imperative Routing
    this.router.navigate(['/']);
  }
}
