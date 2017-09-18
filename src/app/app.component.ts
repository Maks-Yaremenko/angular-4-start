import { Component, OnInit } from '@angular/core';

import { Hero } from './dummy/hero'
import { HeroService } from "./dummy/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HeroService],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  title = 'Tour of Heroes';

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

}
