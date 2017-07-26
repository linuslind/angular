<<<<<<< HEAD
import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { TOASTR_TOKEN, Toastr } from "../common/toastr.service";
=======
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990

@Component({
  templateUrl: 'app/user/profile.component.html',
   styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color:#999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
   `]
})
export class ProfileComponent implements OnInit {
    profileForm:FormGroup
    private firstName:FormControl
    private lastName:FormControl

<<<<<<< HEAD
    constructor(private router:Router,private AuthService:AuthService, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
      
=======
    constructor(private router:Router,private AuthService:AuthService) {

>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
    }

  ngOnInit() {
    this.firstName = new FormControl(this.AuthService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.AuthService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
    this.AuthService.updateCurrentUser(formValues.firstName, formValues.lastName)
<<<<<<< HEAD
    this.toastr.success('Profile Saved')
=======
    this.router.navigate(['events'])
>>>>>>> 79caa07b7ec12ce6c156194e256978c4f334f990
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

  cancel() {
    this.router.navigate(['events'])
  }
}