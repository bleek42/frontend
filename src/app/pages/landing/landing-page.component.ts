import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.css']
})
	
export class LandingPage implements OnInit {
		
	userData;
	constructor(
		private user: UserService,
	)
	{
		this.userData = this.user.read();
		console.log(this.userData);
	}

	ngOnInit(): void {
	}

}
