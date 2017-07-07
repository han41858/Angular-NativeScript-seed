import { Routes } from '@angular/router';

import { HomeNsComponent } from './app/components/home/home.ns.component';
import { AboutNsComponent } from './app/components/about/about.ns.component';

export const routes : Routes = [
	{ path : '', component : HomeNsComponent },
	{ path : 'about', component : AboutNsComponent }
];
