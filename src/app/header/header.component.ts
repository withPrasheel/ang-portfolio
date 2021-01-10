import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    // const menuBtn = document.querySelector('.menu-btn');
    // let menuOpen = false;
    // menuBtn.addEventListener('click', () => {
    //   if (!menuOpen) {
    //     menuBtn.classList.add('open');
    //     menuOpen = true;
    //   } else {
    //     menuBtn.classList.remove('open');
    //     menuOpen = false;
    //   }
    // });
  }

  uliner(key) {
    // console.log(key);
    // console.log('jchjhdj')
    document.getElementById('home').classList.remove('uliner');
    document.getElementById('about').classList.remove('uliner');
    document.getElementById('work').classList.remove('uliner');
    document.getElementById('contact').classList.remove('uliner');

    // console.log(key);
    document.getElementById(key).classList.add('uliner');

    document.getElementById('home2').classList.remove('uliner2');
    document.getElementById('about2').classList.remove('uliner2');
    document.getElementById('work2').classList.remove('uliner2');
    document.getElementById('contact2').classList.remove('uliner2');

    console.log(key);
    document.getElementById(key).classList.add('uliner2');
    // switch (key) {
    //   case 'home':
    //     document.getElementById('home').classList.add('ulinear');
    //     break;

    //   case 'about':
    //     document.getElementById('about').classList.add('ulinear');
    //     break;

    //   case 'work':
    //     document.getElementById('work').classList.add('ulinear');
    //     break;

    //   case 'contact':
    //     document.getElementById('contact').classList.add('ulinear');
    //     break;
    // }
  }



}
