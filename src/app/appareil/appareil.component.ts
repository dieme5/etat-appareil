import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.scss'
})
export class AppareilComponent {
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
