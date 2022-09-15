import { Component, OnInit, Input } from '@angular/core';

interface ISkills {
  CodingSkill: [],
  OtherSkill: [],
  Tools: []
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() Skills: ISkills | null= null;
}
