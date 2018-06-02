import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.router';

import { SearchState, SearchService } from './store';

const config = {
	apiKey: 'AIzaSyBfuWfAoXUvFif-uY9VyrJ_6kwHMLRi1B4',
	authDomain: 'alhaq-4cfb8.firebaseapp.com',
	databaseURL: 'https://alhaq-4cfb8.firebaseio.com',
	projectId: 'alhaq-4cfb8',
	storageBucket: '',
	messagingSenderId: '378114749857'
};

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		AppRoutes,
		RouterModule.forRoot([]),

		AngularFireModule.initializeApp(config),
		AngularFireAuthModule,

		NgxsModule.forRoot([SearchState]),
		NgxsRouterPluginModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot(),

	],
	providers: [SearchService],
	bootstrap: [AppComponent]
})
export class AppModule { }
