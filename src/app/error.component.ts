/**
 * Created by Samuel on 13/7/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h5>Error Page</h5>
    <br/>
    {{error}}
  `,

  styleUrls: ['./app.component.css']
})
export class ErrorComponent {
  error:string;

  constructor() {
    this.error = "I hard coding some errors";
  }

  // Question? : how can I pass data from my Guard class to here ?
}
