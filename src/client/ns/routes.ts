import { Routes } from '@angular/router';

import { HomeComponentNs } from './components/home/home.component.ns';
import { AboutComponentNs } from './components/about/about.component.ns';

export const routes : Routes = [
	{ path : '', component : HomeComponentNs },
	{ path : 'about', component : AboutComponentNs }
];
