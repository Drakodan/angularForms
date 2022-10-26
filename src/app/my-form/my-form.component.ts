import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent {
  // Tu instancies ton objet avec des valeurs initiales
  model: Order = new Order("", 0, new Date(), "");

  constructor() { }
  onSubmit(): void {
    // form submitted
    console.log('Formulaire envoyé !');
  }

  ngOnInit(): void {
  }

}
