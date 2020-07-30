import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html'
})
export class Exercice3Component implements OnInit {

  public P1: string = 'p1';
  public P2: string = 'p2';

  public status: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
