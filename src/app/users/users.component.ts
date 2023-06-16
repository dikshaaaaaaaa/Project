import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDeactive } from '../candeactivate.guard';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})



export class UsersComponent implements OnInit {
  signform!: FormGroup<any>;
save(){
this.signform.value
}

constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.createform();
  }
  createform(){
    this.signform =this.fb.group({

      "fname": ["",Validators.required,Validators.pattern ("[A-za-z]{2,10}")],
      "Lname": ["",Validators.required, Validators.pattern("[A-Za-z]{2,10}")],
      "ename" : ["",Validators.required],
      "pname": ["",Validators.required]
    })
  }
  canExit()
  {
    if(this.signform.dirty)
    {
      const result = confirm("are you sure")
      if(result)
      {
        return true
      }else{
        return false
      }
    }else{
        return true;
    }
  }
    
  }

