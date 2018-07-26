import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    name : string;
    age : number;
    email : string;
    address: {

        street : string,
        city : string,
        state : string,
    };
    hobbies : string[]
    hello : any
   // name : string = 'Steve Smith';
  constructor() { }

  ngOnInit() {
    this.name = 'John Navdeep';
    this.age = 30;
    this.address = {

          street:'50 Main Street',
          city : 'Boston',
          state : 'MA'

    }
    this.hobbies = ['Write Code' , 'Watch Movies','Listen Music']
    this.hello = 'Work hard and Take Care of Health';
    this.email = "john@gmail.com"

    
  }

  // Functions 

  onClick(){
		
    this.name='Johnny Cash';
    this.hobbies.push('New Hobby is Music');
  }
  addHobby(hobby){

        console.log(hobby);
        this.hobbies.unshift(hobby);
        return false;
        
          

  }
  deleteHobby(hobby){

      console.log(hobby)
      for(let i=0;i<this.hobbies.length;i++){

            if(this.hobbies[i] === hobby)
            {

              this.hobbies.splice(i,1);

            }

      }

  }
  
  




}
