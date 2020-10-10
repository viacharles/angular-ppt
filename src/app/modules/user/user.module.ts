import { MyComponent } from './components/my/my.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MyComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  exports: [
    MyComponent,
  ]
})
export class UserModule { }
