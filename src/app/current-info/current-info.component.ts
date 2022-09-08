import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-current-info',
  templateUrl: './current-info.component.html',
  styleUrls: ['./current-info.component.css']
})
export class CurrentInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() currentInfo:any=[];
}
