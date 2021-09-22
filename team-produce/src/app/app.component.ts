import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connectRouter } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'team-produce';

  constructor(private router: Router) {}

  ngOnInit() {
    connectRouter(this.router);
  }
}
