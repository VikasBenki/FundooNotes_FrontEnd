import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  noteList: any;
  constructor(private note:NotesServicesService) { }
  ngOnInit(): void {
    this.GetArchiveList();
  }
  GetArchiveList(){
    this.note.getNote().subscribe((response:any)=>{
      console.log(response);
      this.noteList=response.data;
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isArchive===true && object.isTrash===false
      })
    }
  )}
  displayMessage(event:any){
    this.GetArchiveList();
  }

}
