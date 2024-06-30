import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  secondes!: number;

  constructor() {}

  ngOnInit(): void {
    const counter = interval(1000);
    counter.subscribe({
      next: (value: number) => {
        this.secondes = value;
      },
      error: (err) => {
        console.log('Une erreur a été rencontrée !' + err);
      },
      complete: () => {
        console.log('Observable complétée !');
      },
    });
  }
}
