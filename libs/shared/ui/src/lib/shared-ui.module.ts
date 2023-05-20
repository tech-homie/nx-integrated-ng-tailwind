import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageContentContainerComponent } from './page-content-container/page-content-container.component';
import { PageFooterComponent } from './page-footer/page-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PageContainerComponent,
    PageHeaderComponent,
    PageContentContainerComponent,
    PageFooterComponent,
  ],
  exports: [
    PageContainerComponent,
    PageHeaderComponent,
    PageContentContainerComponent,
    PageFooterComponent,
  ],
})
export class SharedUiModule {}
