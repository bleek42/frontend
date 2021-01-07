import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	template:
		`	
			<ng-template [ngIf]='!display()' [ngIfElse]='mobileNav'>
				<header id='app-header'>
					<app-main-navigation-desktop></app-main-navigation-desktop>
				</header>
			</ng-template>
			
			<ng-template #mobileNav>
				<header id='app-header'>
					<app-main-navigation-mobile></app-main-navigation-mobile>
				</header>
			</ng-template>
		`,
	styleUrls: ['./header.component.css']
})
export class AppHeader implements OnInit {

	constructor() { }
	
	// This needs to be moved to state.
	// This switches the main nav between desktop/mobile.
	display(){
		if(window.innerWidth<361){
			return true;
		}
		return false;
	}
	
	ngOnInit(): void {
	}

}