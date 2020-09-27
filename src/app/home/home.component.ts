import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  message1="Hi, I am Prasheel"
  message2=['Software Developer','Frontend Developer','I love to build things']
  display1:string='';
  display2:string='';
  flag=true;
  
  ngOnInit(): void {
    this.typingCallback(this);   // Calling message1 on initialisation
  }

  typingCallback(that) {
    let total_length = that.message1.length;
    let current_length = that.display1.length;
    if (current_length < total_length) {
      that.display1 += that.message1[current_length];
      setTimeout(that.typingCallback, 100, that);       // recursively calling itself for display to update
    } else {
      that.typer(that,0);      // Calling the typer function for continous display of message2
    }
  }

    typer(that,i){
      i=i%3;
      let message=that.message2[i];
      let total_length=message.length;
      let current_length = that.display2.length;
      if(current_length == total_length){
        that.flag=false;                    // a flag is used here to track if the message2[i] has been fully displayed 
      }
      if (current_length < total_length && that.flag) {
        that.display2 +=message[current_length];
        setTimeout(that.typer, 100,  that,i); // typer recursive call
      }
      else if(!that.flag && current_length!=0)
      {
        that.display2 = that.display2.substring(0,current_length-1);  // updating that 2nd msg with a sting which has one less message
        setTimeout(that.typer, 100,  that,i);
      }
      else{
        that.flag=true;                       // updating the flag and calling the next msg
        setTimeout(that.typer, 100, that,i+1);
      }
    }
}
