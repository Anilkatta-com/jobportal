import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn= false;
  loggedIn : BehaviorSubject<boolean>;

  title = 'angular_example';
  constructor(){
    this.loggedIn = new BehaviorSubject(this.isLoggedIn);
  }
}
