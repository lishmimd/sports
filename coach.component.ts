import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/services/validation/validation.service';
import { Coachdto } from 'src/app/models/DTOs/coachdto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent {

  coachObj: Coachdto = new Coachdto();
  coachList: Array<Coachdto> = [];

  errorMsgForLastName = "";
  errorMsgForFirstName = "";
  errorMsgForInterest = "";
  errorMsgForAddressLine1 = "";
  errorMsgForCity = "";
  errorMsgForState = "";
  errorMsgForZip = "";
  errorMsgForEmail = "";
  errorMsgForCellPhone = "";


  constructor(private validationservice: ValidationService) {

  }
  pushCoach() {
    try {

      if (this.validateCoach()) {
        this.coachList.push(this.coachObj);
        console.log(this.coachList);
      }
    }
    catch (error) {
      console.log("Error");
    }
  }


  validateCoach(): boolean {
    try {
      var isValid = true;
      if (this.validationservice.isStringEmptyOrNull(this.coachObj.lastName)) {
        this.errorMsgForLastName = "Last Name Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachObj.firstName)) {
        this.errorMsgForFirstName = "First Name Required";
        isValid = false;
      }
      if (this.validationservice.isStringEmptyOrNull(this.coachObj.interest)) {
        this.errorMsgForInterest = "Interest Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachObj.addressLine1)) {
        this.errorMsgForAddressLine1 = "Address Line1 Required";
        isValid = false;
      }


      if (this.validationservice.isStringEmptyOrNull(this.coachObj.city)) {
        this.errorMsgForCity = "City Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachObj.state)) {
        this.errorMsgForState = "State Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachObj.zip)) {
        this.errorMsgForZip = "Zip Required";
        isValid = false;
      }

      else if (this.validationservice.isZip(this.coachObj.zip)) {
        this.errorMsgForZip = "Invalid zip";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachObj.email)) {
        this.errorMsgForEmail = "Email Required";
        isValid = false;
      }

      else if (this.validationservice.isEmailValid(this.coachObj.email)) {
        this.errorMsgForEmail = "Invalid Email";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachObj.phone1)) {
        this.errorMsgForCellPhone = "Cell Phone Required";
      }

      else if (this.validationservice.isPhoneNo(this.coachObj.phone1)) {
        this.errorMsgForCellPhone = "Invalid Cellphone Number";
      }

      return isValid;
    }
    catch (error) {
      console.log("error");
    }
  }
}









