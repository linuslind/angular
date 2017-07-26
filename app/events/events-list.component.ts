import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.services'
<<<<<<< HEAD
=======
import { ToastrService } from '../common/toastr.service'
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({
    template: `
    <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
<<<<<<< HEAD
            <event-thumbnail [event]="event"></event-thumbnail>
=======
            <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
        </div>
    </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events:IEvent[]

<<<<<<< HEAD
    constructor(private eventService: EventService, private route:ActivatedRoute) {
=======
    constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
        
    }

   ngOnInit() {
       this.events = this.route.snapshot.data['events']
   }

<<<<<<< HEAD
=======
   handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
   }
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
}