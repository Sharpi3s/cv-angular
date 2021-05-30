import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const contact = document.getElementById('contact') as HTMLInputElement;
    const about = document.getElementById('about') as HTMLInputElement;
    const close = document.getElementById('close') as HTMLInputElement;

    contact.addEventListener('click', () => {
      close.classList.add('collapsed')
      
    })

    about.addEventListener('click', () => {
      close.classList.add('collapsed')
    })

  }

}
