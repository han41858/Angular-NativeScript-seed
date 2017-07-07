import { Router } from '@angular/router';

export class HomeCommonComponent {
	constructor (protected router : Router) {
		console.log('HomeCommonComponent.constructor()');
	}

	navigate (dest : string) {
		console.log('HomeCommonComponent.navigate()', dest);

		this.router.navigate([dest]);
	}
}
