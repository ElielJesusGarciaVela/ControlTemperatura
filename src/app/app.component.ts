import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayThermostateComponent } from './components/display-thermostate/display-thermostate.component';
import { ControlTemperatureComponent } from './components/control-temperature/control-temperature.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayThermostateComponent, ControlTemperatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ControlTemperatura';

  temperature: number = 20;
  umbral = 25

  onCambioTemperaturaOutput(tempUpdate: number){
    this.temperature = tempUpdate
  }

  onCambioUmbralOutput(nuevoUmbral: number){
    this.umbral = nuevoUmbral
  }
}
