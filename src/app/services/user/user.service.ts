import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
	
	user = {
		loggedIn: 0,
		id: null,
		userName: null,
	};
	
	constructor() { }
	
	create() { return 'bice'; }
	read() { return this.user; }
	update() { return 'bice'; }
	delete() { return 'bice'; }
	// log(msg: any) { console.log(msg); }

}
