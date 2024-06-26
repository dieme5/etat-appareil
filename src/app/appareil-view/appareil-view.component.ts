import { Component } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrl: './appareil-view.component.scss'
})
export class AppareilViewComponent {
  isAuth = false;

  lastUpdate!: Promise<Date>;

  appareils!: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);

    this.lastUpdate = new Promise<Date>((resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 2000);
    });
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils; 
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
