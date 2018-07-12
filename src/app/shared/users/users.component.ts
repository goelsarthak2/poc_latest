import { Component, OnInit,  NgZone } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { User } from '../model/user';
import { DataService } from '../services/data.service'
import {Call} from '../model/call'

const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Component({
  selector: 'tcc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  call: Call; 
  object: any;
  navigationSubscription: any; 


constructor(private dataService : DataService, private route:ActivatedRoute, private router: Router, private _ngZone: NgZone
) { 
  window['UserComponent'] = {component: this, zone: _ngZone}; 
  this.navigationSubscription = this.router.events.subscribe((e: any) => {    
    if (e instanceof NavigationEnd) {
      this.initialiseInvites();
    }
  });

}

navigationReceiveCall(name: string, type: string)
{
  debugger;
 var user = {
    name: name.substring(0,name.indexOf("@")).toUpperCase(),
  }
  this.call = {
    user : user
  }
  this.call.type =type;
  this.dataService.setCall(this.call)
  this.router.navigate(["/answerCall"]);

}

navigationEndCall(name: string, type: string)
{
  this.dataService.clearCallData(name);
  this.router.navigate(["/users"]);

}

initialiseInvites() {
  this.getUsers();
}

ngOnDestroy() { 
  if (this.navigationSubscription) {  
     this.navigationSubscription.unsubscribe();
  }
}
selection()
{
  return false;
}
 
ngOnInit(): void {
  this.object = {
    title : 'Users',
    userName : this.dataService.user.name,
    status: true
  };
  this.dataService.sendData(this.object)
  this.getUsers(); 
}  
getUsers(){   
  this.dataService.getUsers(); 
    this.users = this.dataService.getFormData().users;
}

public findAncestor (el) {
  if(el.classList.contains('mat-list-item') )
    return el;
  while (!el.parentElement.classList.contains('mat-list-item'))
  {
      el = el.parentElement
  }
  return el.parentElement;
} 
}

  
