import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },  // Redirige a login por defecto
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, // Carga el módulo de auth
  {path:'admin',loadChildren:() => import('./admin/admin.module').then(m=> m.AdminModule)}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
