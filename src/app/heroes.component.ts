import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";

import { HeroService } from "./hero.service";
import { Router } from '@angular/router';

@Component({
  providers: [HeroService],
  selector: 'my-heroes',
  templateUrl: "./heroes.component.html",
  // templateUrl: './app.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router,
              private heroService: HeroService) { }
  
  getHero(): void {
  this.heroService.getHeroesSlowly().then(heroes => this.heroes =
  heroes);
}
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  ngOnInit(): void {
  this.getHero();
  }
  gotoDetail(): void {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }
}

