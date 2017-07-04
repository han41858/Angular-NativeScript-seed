import { HomeComponent } from '../../../common/components/home/home.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	template : `
		<p>home works!!</p>
		<button (click)="navigate('/about')">to /about</button>
	`
})
export class HomeComponentNg extends HomeComponent {
	constructor (protected router : Router) {
		super(router);
		console.log('HomeComponentNg.constructor()');
	}
}
