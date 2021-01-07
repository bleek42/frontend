// App internal imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { UserService } from './services/user/user.service';

// UI - not a better name at this point.
import { AppHeaderModule } from './components/header/header.module';

@NgModule({
	declarations: [
		AppComponent,
		RoutingComponents,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AppHeaderModule,
	],
	exports: [
		AppRoutingModule,
	],
	providers: [
		UserService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }