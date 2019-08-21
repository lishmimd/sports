import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/services/validation/validation.service';
import { Applicantdto } from 'src/app/models/DTOs/applicantdto';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {
  applicantObj: Applicantdto = new Applicantdto();
  applicantList: Array<Applicantdto> = [];

  errorMsgForLastName = "";
  errorMsgForFirstName = "";
  errorMsgForSports = "";
  errorMsgForAddressLine1 = "";
  errorMsgForCity = "";
  errorMsgForState = "";
  errorMsgForZip = "";
  errorMsgForEmail = "";
  errorMsgForCellPhone = "";



  constructor(private validationservice: ValidationService) {

  }

  pushApplicant() {
    try {

      if (this.validateApplicant()) {
        this.applicantList.push(this.applicantObj);
        console.log(this.applicantList);
      }
    }
    catch (error) {
      console.log("Error");
    }
  }




  validateApplicant(): boolean {
    var isValid = true;
    if (this.validationservice.isStringEmptyOrNull(this.applicantObj.lastName)) {
      this.errorMsgForLastName = "Last Name Required";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.applicantObj.firstName)) {
      this.errorMsgForFirstName = "First Name Required";
      isValid = false;
    }
    if (this.validationservice.isStringEmptyOrNull(this.applicantObj.sports)) {
      this.errorMsgForSports = "Sports Required";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.applicantObj.addressLine1)) {
      this.errorMsgForAddressLine1 = "Address Line1 Required";
      isValid = false;
    }


    if (this.validationservice.isStringEmptyOrNull(this.applicantObj.city)) {
      this.errorMsgForCity = "City Required";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.applicantObj.state)) {
      this.errorMsgForState = "State Required";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.applicantObj.zip)) {
      this.errorMsgForZip = "Zip Required";
      isValid = false;
    }

    else if (this.validationservice.isZip(this.applicantObj.zip)) {
      this.errorMsgForZip = "Invalid zip";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.applicantObj.email)) {
      this.errorMsgForEmail = "Email Required";
      isValid = false;
    }

    else if (this.validationservice.isEmailValid(this.applicantObj.email)) {
      this.errorMsgForEmail = "Invalid Email";
      isValid = false;
    }

    if (this.validationservice.isStringEmptyOrNull(this.applicantObj.phone1)) {
      this.errorMsgForCellPhone = "Cell Phone Required";
      isValid = false;
    }

    else if (this.validationservice.isPhoneNo(this.applicantObj.phone1)) {
      this.errorMsgForCellPhone = "Invalid Cellphone Number";
      isValid = false;
    }

    return isValid;
  }
}









