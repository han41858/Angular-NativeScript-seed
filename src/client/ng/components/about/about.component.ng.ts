import { AboutComponent } from '../../../common/components/about/about.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	template : `
		<p>about works!!</p>
		<button (click)="navigate('/')">to /</button>
	`
})
export class AboutComponentNg extends AboutComponent {
	constructor (protected router : Router) {
		super(router);
		console.log('AboutComponentNg.constructor()');
	}
}
