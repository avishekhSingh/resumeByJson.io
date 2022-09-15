import { Component, OnInit ,Input} from '@angular/core';
interface ICurrentInfo{
  date:string,
  currentLocation:string
}
@Component({
  selector: 'app-current-info',
  templateUrl: './current-info.component.html',
  styleUrls: ['./current-info.component.css']
})
export class CurrentInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() currentInfo:ICurrentInfo |null=null;
  
}
