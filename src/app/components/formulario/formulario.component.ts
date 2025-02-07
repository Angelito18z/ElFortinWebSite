import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: false,
  
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
constructor(private router: Router){}

redirectToAdmin() {
  this.router.navigate(['/admin']);
}

redirectToRegister() {
  this.router.navigate(['/auth/register']);
}

}
