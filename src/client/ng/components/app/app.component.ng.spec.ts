import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponentNg } from './app.component.ng';

describe('AppComponentNg', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports : [
				RouterTestingModule
			],
			declarations: [
				AppComponentNg
			],
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponentNg);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});
