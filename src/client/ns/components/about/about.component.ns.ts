import { AboutComponent } from '../../../common/components/about/about.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'ui/page';

@Component({
	template : `
		<StackLayout>
			<Label text="about works!!"></Label>
			<Button text="to /" (tap)="navigate('/')" className="btn btn-primary btn-active"></Button>
		</StackLayout>
	`
})
export class AboutComponentNs extends AboutComponent {
	constructor (protected router : Router, private page : Page) {
		super(router);
		console.log('AboutComponentNs.constructor()');

		page.actionBarHidden = true;
	}
}
