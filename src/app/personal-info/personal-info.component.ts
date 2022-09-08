import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {
  }
  @Input() person:any=[];
}
