import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './core/guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PlanesComponent } from './features/planes/planes.component';
<<<<<<< HEAD
import { GiveawayComponent } from './features/banners/giveaway/giveaway.component';
import { PaginaAntiguaComponent } from './features/banners/pagina-antigua/pagina-antigua.component';
=======
import { FuncionamientoComponent } from './features/funcionamiento/funcionamiento.component';
>>>>>>> d26fa1da96d9d9c258493a014c712d386bddcda1

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PlanesComponent,
<<<<<<< HEAD
    GiveawayComponent,
    PaginaAntiguaComponent
=======
    FuncionamientoComponent
>>>>>>> d26fa1da96d9d9c258493a014c712d386bddcda1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
