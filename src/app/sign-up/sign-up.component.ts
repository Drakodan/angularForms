import { Component } from '@angular/core';
import { Sign } from '../models/sign';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
  model: Sign = new Sign("", "", "", "")
  constructor() { }

  onSubmit(): void {
    console.log("Création du user !");
  }
}
