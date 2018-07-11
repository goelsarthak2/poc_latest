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
      this.dataService.setUser({
          name: this.user.trim()+"@trials.com"
      })
      debugger;
      
      this.dataService.sendData(true);
      this._router.navigate(["/users"]);  
    }  
    else
    {
    this.dataService.sendData(false);
    } 
  }

}

