import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
@Component({
	selector: 'app-root',
	template: `
		<ng-template [ngIf]='userData.loggedIn' [ngIfElse]='loggedIn'>
			<app-header></app-header>
			<main>
				<router-outlet></router-outlet>
			</main>
		</ng-template>
		
		<ng-template #loggedIn>
			<router-outlet></router-outlet>
		</ng-template>
	`,
	// templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
		
export class AppComponent{

	userData;
	constructor(
		private user: UserService,
	)
	{
		this.userData = this.user.read();
		console.log(this.userData);
	}

}