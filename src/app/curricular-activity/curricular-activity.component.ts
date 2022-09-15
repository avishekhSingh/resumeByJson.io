import { Component, OnInit, Input } from '@angular/core';
interface ICurricular {
  Activity1: ICurricularDetails;
}
interface ICurricularDetails {
  title: string,
  discription: string
}
@Component({
  selector: 'app-curricular-activity',
  templateUrl: './curricular-activity.component.html',
  styleUrls: ['./curricular-activity.component.css']
})
export class CurricularActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() curricular_activity: ICurricular | null = null;
}
