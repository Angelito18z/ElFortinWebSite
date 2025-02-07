import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: false,
  
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {


  @Input() accion:string="";
  
constructor(private router: Router){}

redirectToAdmin() {
  this.router.navigate(['/admin/usuarios']);
}

redirectToRegister() {
  this.router.navigate(['/auth/register']);
}

redirectToLogin(){
  this.router.navigate(['/auth/login']);
}

}
