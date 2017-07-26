import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    EventRouterActivator,
    EventListResolver,
    CreateSessionComponent,
<<<<<<< HEAD
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidator
    
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { JQ_TOKEN, 
    TOASTR_TOKEN, 
    Toastr, 
    CollapsibleWellComponent, 
    SimpleModalComponent,
ModalTriggerDirective } from "./common/index";
=======
    SessionListComponent
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { CollapsibleWellComponent } from './common/collapsible-well.component'
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
import { appRoutes } from './routes'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'

<<<<<<< HEAD
declare let toastr : Toastr
declare let jQuery : Object

=======
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
@NgModule({
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
],
declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
<<<<<<< HEAD
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
],
providers: [
    EventService, 
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},  
    EventRouterActivator,
    EventListResolver,
    VoterService,
=======
    CollapsibleWellComponent
],
providers: [
    EventService, 
    ToastrService, 
    EventRouterActivator,
    EventListResolver,
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
    AuthService,
    {
        provide: 'canDeactivateCreateEvent', 
        useValue: checkDirtyState}
],
bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true;
}