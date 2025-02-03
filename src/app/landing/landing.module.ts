import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    ComponentsModule,
    PagesModule
  ]
})
export class LandingModule { }
