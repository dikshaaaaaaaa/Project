import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginsrviceService {

  login:boolean =false;   //false - no Reactivate to next
  constructor() { }

dologin()
{
  return this.login;
}
}
