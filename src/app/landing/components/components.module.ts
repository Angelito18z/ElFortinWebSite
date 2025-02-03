import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginModalComponent,
    RegisterModalComponent,
    CarouselComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    LoginModalComponent,
    RegisterModalComponent,
    CarouselComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
