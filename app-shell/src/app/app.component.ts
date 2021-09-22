import { Component, NgZone } from '@angular/core';
import { shareNgZone } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ngZone: NgZone) {
    shareNgZone(ngZone);
  }
}
