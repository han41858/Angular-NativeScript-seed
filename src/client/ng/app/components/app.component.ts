import { AppCommonComponent } from '../../../common/components/app.common.component';

import { Component } from '@angular/core';

@Component({
	selector : 'app-root',
	template : `
		<router-outlet></router-outlet>
	`
})
export class AppComponent extends AppCommonComponent {
	constructor () {
		super();
		console.log('AppComponent.constructor()');
	}
}
