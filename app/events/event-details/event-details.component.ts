<<<<<<< HEAD
import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.services'
import { ActivatedRoute, Params } from '@angular/router'
=======
import { Component } from '@angular/core'
import { EventService } from '../shared/event.services'
import { ActivatedRoute } from '@angular/router'
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
import { IEvent, ISession } from '../shared/index'

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px; }
        .event-image { height: 100px; }
        a {cursor:pointer}
    `]
})

<<<<<<< HEAD
export class EventDetailsComponent implements OnInit {
    event:IEvent
    addMode:boolean
    filterBy: string = 'all'
    sortBy: string = 'votes'
=======
export class EventDetailsComponent {
    event:IEvent
    addMode:boolean
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
    
    constructor(private eventService:EventService, private route:ActivatedRoute) {

    }

    ngOnInit() {
<<<<<<< HEAD

        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id'])
            this.addMode = false
        })
=======
        this.event = this.eventService.getEvent(
            +this.route.snapshot.params['id'])
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
    }

    addSession() {
        this.addMode = true
    }

    saveNewSession(session:ISession) {
       const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
       session.id = nextId + 1
       this.event.sessions.push(session)
       this.eventService.updateEvent(this.event)
       this.addMode = false
    }

    cancelAddSession() {
        this.addMode = false
    }

}