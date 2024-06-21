import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './core/guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PlanesComponent } from './features/planes/planes.component';
import { GiveawayComponent } from './features/banners/giveaway/giveaway.component';
import { PaginaAntiguaComponent } from './features/banners/pagina-antigua/pagina-antigua.component';
import { FuncionamientoComponent } from './features/funcionamiento/funcionamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PlanesComponent,
    GiveawayComponent,
    PaginaAntiguaComponent,
    FuncionamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
