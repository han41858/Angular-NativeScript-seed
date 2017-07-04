import { AppComponent } from '../../../common/components/app/app.component';

import { Component } from '@angular/core';

@Component({
	selector : 'ns-app',
	template : '<page-router-outlet></page-router-outlet>'
})
export class AppComponentNs extends AppComponent {
	constructor () {
		super();
		console.log('AppComponentNs.constructor()');
	}
}
