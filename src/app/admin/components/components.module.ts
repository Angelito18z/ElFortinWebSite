import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablaComponent } from './tabla/tabla.component';


@NgModule({
  declarations: [
    SidebarComponent,
    TablaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    TablaComponent
  ]
})
export class ComponentsModule { }
