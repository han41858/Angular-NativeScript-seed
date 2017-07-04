import { HomeComponent } from '../../../common/components/home/home.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'ui/page';

@Component({
	template : `
		<StackLayout>
			<Label text="home works!!"></Label>
			<Button text="to /about" (tap)="navigate('/about')" className="btn btn-primary btn-active"></Button>
		</StackLayout>
	`
})
export class HomeComponentNs extends HomeComponent {
	constructor (protected router : Router, private page : Page) {
		super(router);
		console.log('HomeComponentNs.constructor()');

		page.actionBarHidden = true;
	}
}
