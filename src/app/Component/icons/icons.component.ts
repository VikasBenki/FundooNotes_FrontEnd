import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServicesService } from 'src/app/Services/NotesServices/notes-services.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any;
  data: any;
  isArchive: any;
  isTrash: any;
  colors: any = ["white", "yellow", "blue", "purple", "pink", "gray", "teal", "green", "brown", "teal", "darkblue", "Red"]
  //["white", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"]
  @Input() notedata: any;
  @Output() UpdationEvent = new EventEmitter<string>();

  constructor(private note: NotesServicesService, private snack: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isArchive = this.notedata.isArchive;
    this.isTrash = this.notedata.isTrash
  }

  archieve() {
    this.isArchive = false;
    this.note.archieveNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.UpdationEvent.emit(response)

      this.snack.open('Note Archived', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => {
      this.snack.open('Failed to archieve', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }
  Unarchieve() {

    this.note.archieveNote(this.notedata.noteId).subscribe((res: any) => {
      console.log("unarchive a note", res);
      this.UpdationEvent.emit(res)
      this.snack.open('Note unArchived', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => {
      this.snack.open('failed to unArchive', ' ', {
        duration: 2500,
        verticalPosition: 'bottom'
      })
    }
    )
  }


  trash() {
    this.isTrash = false;
    this.note.trashNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.UpdationEvent.emit(response)
      this.snack.open('Note trashed successfully..', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => this.snack.open('failed to trash', '', {
      duration: 2000,
      verticalPosition: 'bottom'

    })
    )

  }
  Restore() {
    this.isTrash = true;
    this.note.trashNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.UpdationEvent.emit(response)
      this.snack.open('Note Restored successfully..', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => this.snack.open('failed to Restore', '', {
      duration: 2000,
      verticalPosition: 'bottom'

    })
    )
  }


  delete() {
    this.note.deleteNote(this.notedata.noteId).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.UpdationEvent.emit(response);

      this.snack.open('Note Deleted Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }
  changeColor(colors:any) {
    this.note.changeColor(this.notedata.noteId,colors).subscribe((response: any) => {
      console.log("Note Background Color Changed Successfully", response);
      this.UpdationEvent.emit(response);
      this.snack.open('Note Background Color Changed Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })

  }
}