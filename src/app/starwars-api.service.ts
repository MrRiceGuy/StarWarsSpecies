import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { StarWarsPlanetResponse, StarWarsPlanet } from './models/PlanetResponse.model';
import { StarWarsSpecies, StarWarsSpeciesResponse } from "./models/StarWarsApi/SpeciesResponse.model";

@Injectable({
    providedIn: 'root'
})
export class StarwarsApiService {

    constructor(private _httpClient: HttpClient){}

    private baseUrl = 'https://swapi.dev/api/';

    public getPlanets(): Observable<StarWarsPlanetResponse> {
        return this._httpClient.get<StarWarsPlanetResponse>(`${this.baseUrl}planets/`)
    }

    
    public getPlanet(id: number) {
        return this._httpClient.get<StarWarsPlanet>(`${this.baseUrl}planets/${id}`);
    }

    public getSpeciesList(): Observable<StarWarsSpeciesResponse> {
      return this._httpClient.get<StarWarsSpeciesResponse>(`${this.baseUrl}species/`)
  }

  
  public getSpecies(id: number) {
      return this._httpClient.get<StarWarsSpecies>(`${this.baseUrl}species/${id}`);
  }

}