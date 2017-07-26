import { Router,ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/event.services'


@Injectable()
export class EventRouterActivator implements CanActivate {
    constructor(private EventService:EventService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const eventExists = !!this.EventService.getEvent(+route.params['id'])

        if(!eventExists)
            this.router.navigate(['/404'])
        return eventExists
    }

}