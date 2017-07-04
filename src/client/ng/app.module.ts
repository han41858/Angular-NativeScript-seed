import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { AppComponentNg } from './components/app/app.component.ng';
import { HomeComponentNg } from './components/home/home.component.ng';
import { AboutComponentNg } from './components/about/about.component.ng';

@NgModule({
	imports : [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	declarations : [
		AppComponentNg,
		HomeComponentNg,
		AboutComponentNg
	],
	providers : [],
	bootstrap : [AppComponentNg]
})
export class AppModule {}
