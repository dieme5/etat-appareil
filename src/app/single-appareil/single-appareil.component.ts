import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrl: './single-appareil.component.scss'
})
export class SingleAppareilComponent implements OnInit{

  name!: string;
  status!: string;

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    const appareil = this.appareilService.getAppareilById(id);

    if (appareil) {
      this.name = appareil.name;
      this.status = appareil.status;
    } else {
      console.error('Appareil numéro %d n\'existe pas', id);
    }
  }
}