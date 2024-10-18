import { Component } from '@angular/core';
import { ListaComponent } from './components/lista/lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ListaComponent] // Adicione o ListaComponent aqui
})
export class AppComponent {}
