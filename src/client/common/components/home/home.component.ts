import { Router } from '@angular/router';

export class HomeComponent {
	constructor (protected router : Router) {
		console.log('HomeComponent.constructor()');
	}

	navigate (dest : string) {
		console.log('HomeComponent.navigate()', dest);

		this.router.navigate([dest]);
	}
}
