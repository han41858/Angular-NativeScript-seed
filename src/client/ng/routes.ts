import { Routes } from '@angular/router';

import { HomeComponentNg } from './components/home/home.component.ng';
import { AboutComponentNg } from './components/about/about.component.ng';

export const routes : Routes = [
	{ path : '', component : HomeComponentNg },
	{ path : 'about', component : AboutComponentNg }
];
