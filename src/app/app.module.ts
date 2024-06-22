import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './core/guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PlanesComponent } from './features/pages/planes/planes.component';
import { PaginaAntiguaComponent } from './features/banners/pagina-antigua/pagina-antigua.component';
import { FuncionamientoComponent } from './features/banners/funcionamiento/funcionamiento.component';
import { SorteoInstagramComponent } from './features/banners/sorteo-instagram/sorteo-instagram.component';
import { TestimoniosComponent } from './features/banners/testimonios/testimonios.component';
import { NosotrosComponent } from './features/banners/nosotros/nosotros.component';
import { ContactosComponent } from './features/banners/contactos/contactos.component';
import { SorteosComponent } from './features/banners/sorteos/sorteos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PlanesComponent,
    PaginaAntiguaComponent,
    FuncionamientoComponent,
    SorteoInstagramComponent,
    TestimoniosComponent,
    NosotrosComponent,
    ContactosComponent,
    SorteosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
