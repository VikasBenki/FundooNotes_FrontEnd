import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlexAlignStyleBuilder } from '@angular/flex-layout';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  isShow = false;
  title: any;
  description: any;
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private note: NotesServicesService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }
  show() {
    this.isShow = true
  }
  close() {
    this.isShow = false;
    if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
      console.log(this.title, this.description);
      let data = {
        "title": this.title,
        "description": this.description,
        "bgColor": "",
        "isArchive": false,
        "isPin": false,
        "isReminder": false,
        "isTrash": false
      }
      this.note.AddNote(data).subscribe((res: any) => {
        console.log(res);
        this.messageEvent.emit("Hello")
        this.snack.open('Note Created successfully', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })

      }, error => this.snack.open('Both Title and Description should not be empty', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      }))
    }

    
    else {
      console.log("Both Title and Description should not be null or empty");
      this.snack.open('Both Title and Description should not be empty', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }
  }
}
