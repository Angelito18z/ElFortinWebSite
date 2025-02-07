import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importar RouterModule aquí

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    LoginComponent,  // Asegúrate de declarar los componentes aquí
    RegisterComponent
  ],
  imports: [
    
    CommonModule,
    ComponentsModule,
    AuthRoutingModule, // Este import ya maneja las rutas hijas
    
    RouterModule, // Importa RouterModule aquí para que funcione el enrutamiento

  ]
})
export class AuthModule { }
