import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Parada } from './parada';

@Injectable()
export class ParadaService {
  private apiUrl = 'https://securesite.voyenbus.com/services/bus-widget/cities-veb.php?agente=tol';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) {
  }

  getParadas(): Promise<Parada[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().paradas.parada as Parada[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
