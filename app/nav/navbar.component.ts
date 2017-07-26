import { Component } from '@angular/core'
import { AuthService } from "../user/auth.service";
<<<<<<< HEAD
import { ISession } from "../events/shared/event.model";
import { EventService } from "../events/index";
=======
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924; }
    `]
})

export class NavBarComponent {
<<<<<<< HEAD
    searchTerm: String = ""
    foundSessions: ISession[]
    constructor(private auth: AuthService, private eventService: EventService) {

    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions
        })
    }
=======
    constructor(private auth: AuthService) {

    }
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
}