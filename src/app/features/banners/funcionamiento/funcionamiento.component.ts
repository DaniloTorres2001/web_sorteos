import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionamiento',
  templateUrl: './funcionamiento.component.html',
  styleUrls: ['./funcionamiento.component.css']
})
export class FuncionamientoComponent {
  @Input() mostrarNavbar: boolean = true;
}
