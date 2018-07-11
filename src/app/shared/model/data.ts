import {Call} from './call';
import { User } from './user'

export class FormData {    
    calls: Call[]= [];    
    call: Call = new Call();
    users: User[] =[];
    loggedIn: boolean = false;    
} 
