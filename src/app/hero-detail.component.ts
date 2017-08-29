import { Component } from '@angular/core';

@Component({
    selector: "hero-detail",
    template: `
    <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id </label>{{hero.id}}</div>
    <div>
    <label>name: </label>
    <input [{ngModel}]="hero.name" placeholder="name"/>
    </div>
    </div>
    `
})
export class HeroDetailComponent {
    
}

/*
The code below is what I need to add
and I'm not quite sure where to add it and what
to do with the rest of the code.

Instructions:

To move the hero detail view to the HeroDetailComponent, cut the hero detail content from the bottom of the AppComponent template and paste it into a new template property in the @Component metadata.
The HeroDetailComponent has a hero, not a selected hero. Replace the word, "selectedHero", with the word, "hero", everywhere in the template.


Code:

 template: '
    <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id </label>{{hero.id}}</div>
    <div>
    <label>name: </label>
    <input [{ngModel}]="hero.name" placeholder="name"/>
    </div>
    </div>
    '


    
*/