import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { VentasComponent } from './pages/ventas/ventas.component';

const routes: Routes = [
  { path: '', component: AdminPanelComponent, 
    children: [
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'recetas', component: RecetasComponent },
    { path: 'ventas', component: VentasComponent },
    { path: '**', redirectTo: 'usuarios' } // Redirección por defecto
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
