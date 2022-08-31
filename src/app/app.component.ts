import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-header-bar></app-header-bar>
      <div class="section columns">
        <main class="column">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
})
export class AppComponent {}
