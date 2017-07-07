import { Router } from '@angular/router';

export class AboutCommonComponent {
	constructor (protected router : Router) {
		console.log('AboutCommonComponent.constructor()');
	}

	navigate (dest : string) {
		console.log('AboutCommonComponent.navigate()', dest);

		this.router.navigate([dest]);
	}
}
