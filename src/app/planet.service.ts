import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarsPeopleResponse, StarWarsPerson } from './models/StarWarsApi/PeopleResponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PlanetService {


    constructor(private _httpClient: HttpClient) { }

  private baseUrl = 'https://swapi.dev/api/';


  public getPlanets(): Observable<StarWarsPeopleResponse> {
    return this._httpClient.get<StarWarsPeopleResponse>(`${this.baseUrl}planets/`);
  }

  getPlanet(id: number) {
    return this._httpClient.get<StarWarsPerson>(`${this.baseUrl}planets/${id}`);
  }
}
