import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { FormData } from './shared/model/data';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

declare var userStatusChangeOffline : any;
@Component({
  selector: 'tcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formData: FormData;
  showLogout : boolean;
  subscription: Subscription;
  selectedEmployeeCountRadioButton: string = 'All';
  name: string = '';
  pageName : string = 'Login';
  logoutObject: any;
  ngOnInit(): void {  
    this.showLogout = this.dataService.getFormData().loggedIn == true;
  }

 constructor(private dataService: DataService, private router: Router) {
  this.subscription = this.dataService.getData().subscribe(x => {
    debugger;   
    this.showLogout = x.status; 
    this.pageName = x.title;
    if(x.status == true)
    {
      this.name = x.userName;
    }
    else
    {
      this.name = "";
    }  
  });
    }

    Logout(){  
      debugger;
      this.logoutObject = {
          status: false,
          userName : "",
          title: "Login"
      } 
      this.dataService.resetFormData();
      userStatusChangeOffline("closed");
      this.dataService.sendData(this.logoutObject);
      this.router.navigate(['/login']);      
    } 

    
}