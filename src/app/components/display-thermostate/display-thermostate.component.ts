import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-thermostate',
  imports: [],
  templateUrl: './display-thermostate.component.html',
  styleUrl: './display-thermostate.component.css',
  host: {
    '[class.warning]': 'alarma'
  }
})
export class DisplayThermostateComponent implements OnChanges{

  //hooks
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temperaturaInput']){
      let temperatura = changes['temperaturaInput'].currentValue;
      this.alarma = (temperatura > this.umbralInput())
    }
  }

  temperaturaInput = input.required<number>();
  umbralInput = input.required<number>();

  alarma = false;
}
