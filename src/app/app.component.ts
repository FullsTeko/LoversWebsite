import { MenuComponent } from './shared/menu/menu.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <app-menu />
  <router-outlet />
  `,
    imports: [RouterOutlet, MenuComponent]
})
export class AppComponent {
  title = 'LoversProject';
}
