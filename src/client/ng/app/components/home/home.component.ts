import { HomeCommonComponent } from '../../../../common/components/home/home.common.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	templateUrl : './home.component.pug',
	styleUrls : ['./home.component.styl']
})
export class HomeComponent extends HomeCommonComponent {
	constructor (protected router : Router) {
		super(router);
		console.log('HomeComponent.constructor()');
	}
}
