import { Injectable } from '@angular/core';
import { HttpService } from '../HttpServices/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=environment.baseUrl;


  constructor(private httpservice: HttpService) {}
  registration(data: any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
    return this.httpservice.PostService(this.base+'User/register', data, false, header)
  }
  login(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
return this.httpservice.PostService(this.base+`User/Login/${data.email}/${data.password}`, {}, false,header)
  
  }
  forgetPassword(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  return this.httpservice.PostService(this.base+`User/ForgetPassword/${data.email}`,{},true,header)
  }
  resetPassword(data:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
      })
    }
  return this.httpservice.PutService(this.base+'User/ChangePassword',data,true,header)
  }
}
