import { Routes } from '@angular/router';

import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';

export const routes : Routes = [
	{ path : '', component : HomeComponent },
	{ path : 'about', component : AboutComponent }
];
