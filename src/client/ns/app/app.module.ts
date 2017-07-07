import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { routes } from '../routes';

import { AppNsComponent } from './components/app.ns.component';
import { HomeNsComponent } from './components/home/home.ns.component';
import { AboutNsComponent } from './components/about/about.ns.component';

@NgModule({
	imports : [
		NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(routes)
	],
	declarations : [
		AppNsComponent,
		HomeNsComponent,
		AboutNsComponent
	],
	providers : [],
	bootstrap : [AppNsComponent],
	schemas : [
		NO_ERRORS_SCHEMA
	]
})
export class AppModule {}
