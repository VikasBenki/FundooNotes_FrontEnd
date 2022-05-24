import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
noteList:any;

  constructor(private note:NotesServicesService) { }
  @Output() UpdationEvent= new EventEmitter<string>();
  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
    this.note.getNote().subscribe((response:any)=>{
      console.log(response.data);
      this.noteList=response.data;
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isTrash===true
      })
    }
  )}
  displayMessage(event:any){
    this.GetAllNotes();
  }


}
