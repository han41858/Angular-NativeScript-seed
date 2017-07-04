import { AppComponent } from '../../../common/components/app/app.component';

import { Component } from '@angular/core';

@Component({
	selector : 'app-root',
	template : `
		<router-outlet></router-outlet>
	`
})
export class AppComponentNg extends AppComponent {
	constructor () {
		super();
		console.log('AppComponentNg.constructor()');
	}
}
