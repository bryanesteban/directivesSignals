import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'page-component',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

public counter = signal(10);
public squareCounter = computed(() => this.counter() * this.counter())

increseBy(value: number){
   this.counter.update(current => current + value);
}

}
