import { Router } from '@angular/router';

export class AboutComponent {
	constructor (protected router : Router) {
		console.log('AboutComponent.constructor()');
	}

	navigate (dest : string) {
		console.log('AboutComponent.navigate()', dest);

		this.router.navigate([dest]);
	}
}
