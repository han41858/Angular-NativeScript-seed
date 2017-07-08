import { HomeCommonComponent } from '../../../../common/components/home/home.common.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'ui/page';

@Component({
	moduleId : module.id,
	templateUrl : './home.ns.component.pug',
	styleUrls : ['./home.ns.component.styl']
})
export class HomeNsComponent extends HomeCommonComponent {
	constructor (protected router : Router, private page : Page) {
		super(router);
		console.log('HomeNsComponent.constructor()');

		page.actionBarHidden = true;
	}
}
