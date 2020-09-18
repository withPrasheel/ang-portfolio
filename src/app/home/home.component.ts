import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  message1="Hi, I am Prasheel"
  // message2=['I am a Software Developer','I love to build things','I am Very Passionate About What I Do']
  message2='I am a Software Developer';
  display1:string='';
  display2:string='';
  i=0;
  
  ngOnInit(): void {
    // this.func(true);
    this.typingCallback(this);
    // this.display1='';
    this.typingCallback2(this);

  }
  // func(that) {
  //   console.log(this.print1);
  //   if(that)
  //   {
  //     this.print1='he';
  //   }
  //   else
  //   {
  //     this.print1="Heheheheh";
  //   }
  //   console.log('-----'+this.print1);
  //   setTimeout(this.func,1000,false);
    

  // }
  // private typewriter_text: string = "Thank you for your interest";
  // private typewriter_display: string = "";

  typingCallback(that) {
    let total_length = that.message1.length;
    let current_length = that.display1.length;
    if (current_length < total_length) {
      that.display1 += that.message1[current_length];
      // if(that.message1[current_length]=='i')
      // {
      //   console.log('------------')
      //   setTimeout(that.typingCallback, 1000, that);
      // }

      setTimeout(that.typingCallback, 100, that);
    } else {
      // that.typewriter_display = "";
    }
  }
  typingCallback2(that) {
    let total_length = that.message2.length;
    let current_length = that.display2.length;
    if (current_length < total_length) {
      that.display2 += that.message2[current_length];
      // if(that.message1[current_length]=='i')
      // {
      //   console.log('------------')
      //   setTimeout(that.typingCallback, 1000, that);
      // }

      setTimeout(that.typingCallback, 100, that);
    } else {
      // that.typewriter_display = "";
    }
}}
