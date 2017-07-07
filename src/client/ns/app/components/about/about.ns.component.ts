import { AboutCommonComponent } from '../../../../common/components/about/about.common.component';

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
export class AboutNsComponent extends AboutCommonComponent {
	constructor (protected router : Router, private page : Page) {
		super(router);
		console.log('AboutNsComponent.constructor()');

		page.actionBarHidden = true;
	}
}
