import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarsPeopleResponse as StarwarsSpeciesResponse, StarWarsPerson as StarWarsSpecies } from './models/StarWarsApi/PeopleResponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SpeciesService {


    constructor(private _httpClient: HttpClient) { }

  private baseUrl = 'https://swapi.dev/api/';


  public getSpeciesList(): Observable<StarwarsSpeciesResponse> {
    return this._httpClient.get<StarwarsSpeciesResponse>(`${this.baseUrl}species/`);
  }

  getSpecies(id: number) {
    return this._httpClient.get<StarWarsSpecies>(`${this.baseUrl}species/${id}`);
  }
}
