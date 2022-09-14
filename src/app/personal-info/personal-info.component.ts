import { Component, OnInit, Input } from '@angular/core';

//! Create Interface for defining data types
interface IPersonalInfo {
  name: string,
  linkedIn: string,
  email: string,
  mobileNo: number,
  birth: string,
  gender: string,
  location: string,
  carrierObjective: string,
  Summary: [],
}
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})

export class PersonalInfoComponent implements OnInit {


  constructor() {
  }
  ngOnInit(): void {
  }


  //! Pass the the interface
  @Input() person: IPersonalInfo | null=null;

}
