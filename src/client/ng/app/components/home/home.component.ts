import { HomeCommonComponent } from '../../../../common/components/home/home.common.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	template : `
		<p>home works!!</p>
		<button (click)="navigate('/about')">to /about</button>
	`
})
export class HomeComponent extends HomeCommonComponent {
	constructor (protected router : Router) {
		super(router);
		console.log('HomeComponent.constructor()');
	}
}
