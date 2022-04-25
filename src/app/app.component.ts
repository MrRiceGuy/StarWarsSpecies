import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsPlanet } from './models/PlanetResponse.model';
import { StarWarsSpecies } from './models/StarWarsApi/SpeciesResponse.model';
import { StarwarsApiService } from './starwars-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlanetAngular';
  planet$: Observable<StarWarsPlanet>;
  species$: Observable<StarWarsSpecies>;
/* 
 constructor(private_starwarsApiService: StarwarsApiService){
  this.species$ = this._starWarsApiService.getSpecies(1);

   */
starWarsSpeciesResponse: string = "";
  /**
   *
  //  */

  //  ngOnInit(){

  //   const subscription = this._starWarsApiService.getSpecies(1).subscribe( response =>{



  //     this.starWarsPlanetResponse = JSON.stringify(response, null, 2);
  //   });
  // }


  constructor(private _starWarsApiService: StarwarsApiService, ) {
    this.planet$ = this._starWarsApiService.getPlanet(1);
    this.species$= this._starWarsApiService.getSpecies(1);
    
  }

  starWarsPlanetResponse: string ="";

  ngOnInit(){

    const subscription = this._starWarsApiService.getPlanet(1).subscribe( response =>{



      this.starWarsPlanetResponse = JSON.stringify(response, null, 2);
    });
  }

  toJson(obj: any){
    return JSON.stringify(obj, null, 2);
  }
}