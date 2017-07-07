import { AboutCommonComponent } from '../../../../common/components/about/about.common.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	template : `
		<p>about works!!</p>
		<button (click)="navigate('/')">to /</button>
	`
})
export class AboutComponent extends AboutCommonComponent {
	constructor (protected router : Router) {
		super(router);
		console.log('AboutComponent.constructor()');
	}
}
