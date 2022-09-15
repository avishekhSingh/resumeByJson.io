import { Component, OnInit,Input } from '@angular/core';
interface IDeclare{
  heading:string,
  declare:string
}
@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() declaration:IDeclare|null=null
}
