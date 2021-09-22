import { Component, OnInit } from '@angular/core';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Shell App';
  ngVersion = '12.2.0';
  cardItem: WebComponentWrapperOptions = {
    remoteEntry: 'http://localhost:4299/remoteEntry.js',
    remoteName: 'shareable',
    exposedModule: './components/card',
    elementName: 'card-element'
  };
  cardProps = {
    name: 'Dashboard'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
