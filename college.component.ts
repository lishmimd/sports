import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/services/validation/validation.service';
import { Collegedto } from 'src/app/models/DTOs/collegedto';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent {

  collegeObj: Collegedto = new Collegedto();
  collegeList: Array<Collegedto> = [];
  errorMsgForCollegeName = "";
  errorMsgForAddressLine1 = "";
  errorMsgForCity = "";
  errorMsgForState = "";
  errorMsgForZip = "";
  errorMsgForEmail = "";
  errorMsgForCellPhone = "";


  constructor(private validationservice: ValidationService) {

  }

  pushCollege() {
    try {

      if (this.validateCollege()) {
        this.collegeList.push(this.collegeObj);
        console.log(this.collegeList);
      }
    }
    catch (error) {
      console.log("Error");
    }
  }


  validateCollege(): boolean {
    try {
      var isValid = true;


      if (this.validationservice.isStringEmptyOrNull(this.collegeObj.collegeName)) {
        this.errorMsgForCollegeName = "College Name Required";
        isValid = false;
      }


      if (this.validationservice.isStringEmptyOrNull(this.collegeObj.addressLine1)) {
        this.errorMsgForAddressLine1 = "Address Line1 Required";
        isValid = false;
      }


      if (this.validationservice.isStringEmptyOrNull(this.collegeObj.city)) {
        this.errorMsgForCity = "City Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.collegeObj.state)) {
        this.errorMsgForState = "State Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.collegeObj.zip)) {
        this.errorMsgForZip = "Zip Required";
        isValid = false;
      }

      else if (this.validationservice.isZip(this.collegeObj.zip)) {
        this.errorMsgForZip = "Invalid zip";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.collegeObj.email)) {
        this.errorMsgForEmail = "Email Required";
        isValid = false;
      }

      else if (this.validationservice.isEmailValid(this.collegeObj.email)) {
        this.errorMsgForEmail = "Invalid Email";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.collegeObj.phone1)) {
        this.errorMsgForCellPhone = "Cell Phone Required";
      }

      else if (this.validationservice.isPhoneNo(this.collegeObj.phone1)) {
        this.errorMsgForCellPhone = "Invalid Cellphone Number";
      }

      return isValid;
    }
    catch (error) {
      console.log("error");
    }
  }
}


