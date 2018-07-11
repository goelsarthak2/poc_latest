import {User} from './user';

export class Call {
     user: User = {
        name: '',
        avatar: '',      
    };
    type?: string
}

export enum Type{
     CALLING,RECEIVING
}
