import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    IndexComponent
  ]
})
export class PagesModule { }
