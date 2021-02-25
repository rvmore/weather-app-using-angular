import { NgModule } from '@angular/core';
import { UiLibraryFooterComponent } from './components/ui-lib-footer/ui-lib-footer.component';
import { UiLibraryHeaderComponent } from './components/ui-lib-header/ui-lib-header.component';
import { UiLibraryComponent } from './ui-library.component';

@NgModule({
  declarations: [
    UiLibraryComponent,
    UiLibraryHeaderComponent,
    UiLibraryFooterComponent
  ],
  imports: [],
  exports: [
    UiLibraryComponent,
    UiLibraryHeaderComponent,
    UiLibraryFooterComponent
  ]
})
export class UiLibraryModule { }
