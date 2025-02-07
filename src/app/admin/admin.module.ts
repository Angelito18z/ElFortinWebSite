import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    ComponentsModule
  ],
  exports:[
    RouterModule
  ]
})
export class AdminModule { }
