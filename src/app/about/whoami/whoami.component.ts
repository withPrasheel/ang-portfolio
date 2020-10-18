import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.css']
})
export class WhoamiComponent implements OnInit {

  constructor() { }
  // i = 0
  ngOnInit(): void {
  }

  // move() {

  //   if (this.i == 0) {
  //     this.i = 1;
  //     var elem = document.getElementById("myBar");
  //     var width = 1;
  //     var id = setInterval(frame, 10);
  //     function frame() {
  //       if (width >= 70) {
  //         clearInterval(id);
  //         this.i = 0;
  //       } else {
  //         width++;
  //         elem.style.width = width + "%";
  //       }
  //     }
  //   }
  // }


  // const button = document.querySelector('button');
  // const progress = document.querySelector('.progress');
  // const h2 = document.querySelector('h2');
  // i = 0;
  // x = 100;

  // progress.style.width = '0%';


  // pgs() {

  //   if (this.progress.style.width === '0%') {
  //     setInterval(speed, 20);

  //     function speed() {

  //       if (this.i < 100) {
  //         this.i++;
  //         this.h2.innerHTML = this.i + '%';
  //         this.progress.style.width = this.i + '%';
  //       }

  //     }
  //   }

  //   else {
  //     setInterval(sss, 20);

  //     function sss() {

  //       if (this.x > 0) {
  //         this.x--;
  //         this.h2.innerHTML = this.x + '%';
  //         this.progress.style.width = this.x + '%';
  //       }

  //     }


  //   }


  // }

}
