import {Component, AfterViewInit} from '@angular/core';
import {Router, NavigationStart, NavigationCancel, NavigationEnd} from '@angular/router';

@Component({
  selector: 'webshop-app',
  template: `<div class="loader-layout">
  
  <div [hidden]="!loading" class="loader">
    <h2>Loading...</h2>
    <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
  </div>
  </div>
  <div [hidden]="loading" class="router-output">
    <router-outlet></router-outlet>
  </div>

  `,
  styles: [
    `
      .loader-layout {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    `
  ]
})
export class WebshopAppComponent {
  title = 'Webshop App';
  loading: boolean;
  constructor(private router: Router) {
    this.loading = true;
  }
  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.loading = false;
      }
    });
  }
}
