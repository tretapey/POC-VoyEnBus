import { Component, OnInit } from '@angular/core';

import { Parada } from './parada';
import { ParadaService }  from './parada.service';

@Component({
  selector: 'app-paradas-input',
  templateUrl: './paradas-input.component.html',
  styleUrls: ['./paradas-input.component.css'],
  providers: [ParadaService]
})
export class ParadasInputComponent implements OnInit {
  parada: Parada;
  paradas: Parada[];
  isDataLoaded:boolean = false;

  constructor(
    private paradaService:ParadaService 
  ) {}

  ngOnInit() {
    this.getParadas();
  }
  
  getParadas(): void {
    this.paradaService.getParadas().then(paradas => {
      this.paradas = paradas;
      this.isDataLoaded = true;
    });
  }
}
