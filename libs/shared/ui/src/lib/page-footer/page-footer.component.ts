import { Component } from '@angular/core';

@Component({
  selector: 'shared-ui-page-footer',
  templateUrl: './page-footer.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class PageFooterComponent {}
