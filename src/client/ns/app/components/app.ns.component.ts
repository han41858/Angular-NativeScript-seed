import { AppCommonComponent } from '../../../common/components/app.common.component';

import { Component } from '@angular/core';

@Component({
	selector : 'ns-app',
	template : '<page-router-outlet></page-router-outlet>'
})
export class AppNsComponent extends AppCommonComponent {
	constructor () {
		super();
		console.log('AppNsComponent.constructor()');
	}
}
