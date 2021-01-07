import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { AppHeader } from './header.component';
import { MainNavigationDesktop } from '../main-navigation-desktop/main-navigation-desktop.component';
import { MainNavigationMobile } from '../main-navigation-mobile/main-navigation-mobile.component';

@NgModule({
	declarations: [
        AppHeader,
        MainNavigationDesktop,
		MainNavigationMobile,
    ],
    imports: [
		BrowserModule,
		AppRoutingModule,
    ],
    exports: [
        AppHeader,
    ],
    providers: [],
    bootstrap: [AppHeader]
})

export class AppHeaderModule { }