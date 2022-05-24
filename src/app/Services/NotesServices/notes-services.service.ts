import { HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HttpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {
base =environment.baseUrl;
token : any;
  constructor(private http: HttpService) {this.token=localStorage.getItem(`token`) }
  AddNote(data:any){
    let header ={
      headers : new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization':`Bearer ${this.token}`
      })
    }
    return this.http.PostService(this.base+ 'Note/AddNote',data, true, header)
  }
  getNote() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.GetService(this.base + 'Note/GetAllNotes', true, header)
  }
  updateNote(data: any, noteId: any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.PutService(this.base + `Note/Update/${noteId}`, data, true, header)
  }
  archieveNote( noteId: any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.PutService(this.base + `Note/ArchiveNote/${noteId}`,{}, true, header)
  }
  trashNote(noteId: any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.PutService(this.base + `Note/IsTrash/${noteId}`, {}, true, header)
  }

  deleteNote( noteId: any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.DeleteService(this.base + `Note/Delete/${noteId}`, true, header)
  }
  changeColor( noteId: any,colors:any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.PutService(this.base + `Note/ChangeColorNote/${noteId}?color=${colors}`,{}, true, header)
  }
}


