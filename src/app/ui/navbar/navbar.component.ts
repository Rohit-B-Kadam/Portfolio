import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

	activeNav = "";
	openMenu() {
		this.activeNav = "active"
	}

	closeMenu(){
		this.activeNav = ""
	}
}
