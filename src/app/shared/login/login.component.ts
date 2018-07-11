import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

declare var kandy: any;

@Component({
  selector: 'tcc-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user : string;
  pass : string;
  object: any;
  constructor(private _router: Router, private dataService : DataService, private _ngZone: NgZone
) 
  {
    window['LoginComponent'] = {component: this, zone: _ngZone};
  }

  ngOnInit() {      
  }

   login()   
   {    
    kandy.connect({
      username: this.user.trim()+"@trials.com",
      password: this.pass.trim()+"@1234" 
    })

   }    
  
  loginFromOutside(connectStatus : boolean)
  {    
    debugger;
    if(connectStatus == true)     
    {
      this.object = {
        status: true,
        userName : this.user.trim().toUpperCase()
      };
      this.dataService.setUser({
          name: this.user.trim().toUpperCase()
      })
      debugger;
      
      this.dataService.sendData(this.object);
      this._router.navigate(["/users"]);  
    }  
    else
    {
      this.object = {
        status: false,
        userName : "",
        title: "Login"
      };
      this.dataService.sendData(this.object);
    } 
  }

}

