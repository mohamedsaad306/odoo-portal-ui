import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  items: any[]= [
    {id:1,text:"item 1 "},
    {id:2,text:"item 2 "},
    {id:3,text:"item 3 "},
    {id:4,text:"item 4  "},
    {id:5,text:"item 5 "},
  ];
  constructor() { }

  ngOnInit() {
  }


}
