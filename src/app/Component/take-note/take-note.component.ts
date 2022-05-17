import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  isShow =false;

  constructor() { }

  ngOnInit(): void {
  }
  show(){
    this.isShow = true
  }
  close(){
    this.isShow=false
  }

}
