import { Injectable } from '@angular/core';
import { Call }  from '../model/call'
import {User}  from '../model/user'
import {FormData} from '../model/data'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Injectable()
export class DataService {
    users: User[]= []
    user : User= {
        name : ""
    }
    private formData: FormData = new FormData();
    private subject = new Subject<any>();
    sendData(object: any) {
        this.subject.next(object);
    }
 
    clearData() {
        this.subject.next();
    }
 
    getData(): Observable<any> {
        return this.subject.asObservable();
    }

    getCalls(): Call[] {            
        return this.formData.calls;
    }
 
    setCall(data: Call) {  
        var user : User =  { 
            name : data.user.name,
            avatar: data.user.avatar
        }    
       var call :Call ={
           user: user,
           type: data.type
       }
        this.formData.calls.push(call);
    } 
   
    getFormData(): FormData {  
        return this.formData;
    } 

    getCall(): Call {          
        return this.formData.call;
    }
   
    setUser(user: User)  {
    debugger;
    this.formData.loggedIn = true;
    this.user.name = user.name;     
  }
  getUsers(){  
      debugger;        
    this.users = [];
    const randomId = this.getRandomId();   
    for(var i =1; i<5; i++)
    {
        if(this.user.name != "HCL"+ i)
        this.users.push({
            id: randomId,
            //avatar: `${AVATAR_URL}/${randomId}.png`,
            avatar: '../../../assets/download.png',
            name: "HCL" + i}
          )
    }   
    this.formData.users = this.users; 
  }

  clearCallData(name: string){    
    let call: Call = this.formData.calls.filter( x=>x.user.name == name)[0];
    const index: number = this.formData.calls.indexOf(call);
    if (index !== -1) {
        this.formData.calls.splice(index, 1);
    }      
  }

  resetFormData(){  
      this.formData =  new FormData();
      this.users = [];
  }

   private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }
  checkedStatus(): boolean{
    return this.formData.loggedIn == true
    
  }
}