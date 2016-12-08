import { Component } from '@angular/core';
import {Highlight} from "./high.directive";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Highlight]
})
export class AppComponent {

  private switch = true;
  private items = [1,2,3,4,5];
  private value = 100;
  onSwitch(){
    this.switch = !this.switch;
  }
}

