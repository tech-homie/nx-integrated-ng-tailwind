import { Component } from '@angular/core';

@Component({
  selector: 'shared-ui-page-content-container',
  templateUrl: './page-content-container.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class PageContentContainerComponent {}
