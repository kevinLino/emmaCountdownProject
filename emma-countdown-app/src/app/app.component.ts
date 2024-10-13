import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';
import { ReproductorComponent } from "./reproductor/reproductor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownComponent, ReproductorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Creando Proyecto EmmaProject';
}


