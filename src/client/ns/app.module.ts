import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { routes } from './routes';

import { AppComponentNs } from './components/app/app.component.ns';
import { HomeComponentNs } from './components/home/home.component.ns';
import { AboutComponentNs } from './components/about/about.component.ns';

@NgModule({
	imports : [
		NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(routes)
	],
	declarations : [
		AppComponentNs,
		HomeComponentNs,
		AboutComponentNs
	],
	providers : [],
	bootstrap : [AppComponentNs],
	schemas : [
		NO_ERRORS_SCHEMA
	]
})
export class AppModule {}
