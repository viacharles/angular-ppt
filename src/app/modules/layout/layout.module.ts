
import { LayoutComponent } from './pages/layout/layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@overlay/overlay.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    SharedModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
