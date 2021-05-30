import { Component, OnInit } from '@angular/core';
import { MsgModel } from 'src/app/models/msg-model'
import {Router} from '@angular/router';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route: Router) { }


  public message = new MsgModel()

  send(form: any) {
    if(form.valid) {
    // if(this.message.namn !=='' && this.message.email !=='' && this.message.subject !=='' && this.message.message !=='') {
      this.route.navigate(['/thanks']);
    }
  // send(form: any) {
  // send(contactForm: NgForm) {

    console.log(this.message)
  }



  ngOnInit(): void {

    const ball1 = document.getElementById('ball1') as HTMLInputElement;
    const ball2 = document.getElementById('ball2') as HTMLInputElement;
    const lips = document.getElementById('lips') as HTMLInputElement;


    const form = document.getElementById('contact-form') as HTMLInputElement;
    const shakeForm = document.getElementById('shake-form') as HTMLInputElement;
    const btn = document.getElementById('contact-btn') as HTMLInputElement;

    const name = document.getElementById('namn') as HTMLInputElement;
    const lineName = document.getElementById('line-name') as HTMLInputElement;

    const email = document.getElementById('email') as HTMLInputElement;
    const lineEmail = document.getElementById('line-email') as HTMLInputElement;

    const sub = document.getElementById('sub') as HTMLInputElement;
    const lineSub = document.getElementById('line-sub') as HTMLInputElement;

    const msg = document.getElementById('msg') as HTMLInputElement;
    const lineMsg = document.getElementById('line-msg') as HTMLInputElement;



    document.onmousemove = function(e) {
      
      if(ball1 !== null && ball2 !== null) {

        const x = -(window.innerWidth / 2 - e.pageX) / 110;
        const y = -(window.innerHeight / 2 - e.pageY) / 110;

        ball1.style.transform = `translateY(${y}px) translateX(${x}px)`;
        ball2.style.transform = `translateY(${y}px) translateX(${x}px)`;

      }
      if(lips !== null) {

        const x = -(window.innerWidth / 2 - e.pageX) / 330;
        // const z = -(window.innerWidth / 2 - e.pageX) / 180;
        const y = -(window.innerHeight / 2 - e.pageY) / 280;

        lips.style.transform = `rotate(${y}deg) rotate(${x}deg) skew(${x}deg) skew(${y}deg)`;
      }

    }
    


    btn.addEventListener('click', () => {
      if(form.classList.contains('ng-invalid')) {
        if(shakeForm.classList.contains('animation1')) {
          shakeForm.classList.remove('animation1')
          shakeForm.classList.add('animation2')
        }
        else if(shakeForm.classList.contains('animation2')) {
          shakeForm.classList.remove('animation2')
          shakeForm.classList.add('animation1')
        }
        else { 
          shakeForm.classList.add('animation2')
        }
      }
    })
     


    // event listner focus in
    name.addEventListener('focusin', (e) => {
      if (name.classList.contains('ng-invalid') && name.classList.contains('ng-touched')) {
        lineName.style.backgroundColor = '#CF6679'
        lineName.style.transform = 'translate(0, 0)'
      } else {
        lineName.style.backgroundColor = '#03DAC6'
        lineName.style.transform = 'translate(0, 0)'
      }
    }) 
    email.addEventListener('focusin', (e) => {
      if (email.classList.contains('ng-invalid') && email.classList.contains('ng-touched')) {
        lineEmail.style.backgroundColor = '#CF6679'
        lineEmail.style.transform = 'translate(0, 0)'
      } else {
        lineEmail.style.backgroundColor = '#03DAC6'
        lineEmail.style.transform = 'translate(0, 0)'
      }
    }) 
    sub.addEventListener('focusin', (e) => {
      if (sub.classList.contains('ng-invalid') && sub.classList.contains('ng-touched')) {
        lineSub.style.backgroundColor = '#CF6679'
        lineSub.style.transform = 'translate(0, 0)'
      } else {
        lineSub.style.backgroundColor = '#03DAC6'
        lineSub.style.transform = 'translate(0, 0)'
      }
    }) 
    msg.addEventListener('focusin', (e) => {
      if (msg.classList.contains('ng-invalid') && msg.classList.contains('ng-touched')) {
        lineMsg.style.backgroundColor = '#CF6679'
        lineMsg.style.transform = 'translate(0, 0)'
      } else {
        lineMsg.style.backgroundColor = '#03DAC6'
        lineMsg.style.transform = 'translate(0, 0)'
      }
    }) 


    // evnt listner focus out
    name.addEventListener('focusout', (e) => {
      lineName.style.backgroundColor = '#03DAC6'
      lineName.style.transform = 'translate(-100%, 0)'
      
      if(name.value === '') {
        lineName.style.backgroundColor = '#CF6679'
        lineName.style.transform = 'translate(0, 0)'
      }
      else if (name.classList.contains('ng-invalid')) {
        lineName.style.backgroundColor = '#CF6679'
        lineName.style.transform = 'translate(0, 0)'
      }
      else { 
        lineName.style.backgroundColor = '#03DAC6'
        lineName.style.transform = 'translate(0, 0)'
      }
    }) 

    email.addEventListener('focusout', (e) => {
      lineEmail.style.backgroundColor = '#03DAC6'
      lineEmail.style.transform = 'translate(-100%, 0)'
      
      if(email.value === '') {
        lineEmail.style.backgroundColor = '#CF6679'
        lineEmail.style.transform = 'translate(0, 0)'
      }
      else if (email.classList.contains('ng-invalid')) { 
        lineEmail.style.backgroundColor = '#CF6679'
        lineEmail.style.transform = 'translate(0, 0)'
      } else {
        lineEmail.style.backgroundColor = '#03DAC6'
        lineEmail.style.transform = 'translate(0, 0)'
      }
    }) 

    sub.addEventListener('focusout', (e) => {
      lineSub.style.backgroundColor = '#03DAC6'
      lineSub.style.transform = 'translate(-100%, 0)'
      
      if(sub.value === '') {
        lineSub.style.backgroundColor = '#CF6679'
        lineSub.style.transform = 'translate(0, 0)'
      } 
      else if (sub.classList.contains('ng-invalid')) {
        lineSub.style.backgroundColor = '#CF6679'
        lineSub.style.transform = 'translate(0, 0)'
      }  
      else {
        lineSub.style.backgroundColor = '#03DAC6'
        lineSub.style.transform = 'translate(0, 0)'
      }
    }) 

    msg.addEventListener('focusout', (e) => {
      lineMsg.style.backgroundColor = '#03DAC6'
      lineMsg.style.transform = 'translate(-100%, 0)'
      
      if(msg.value === '') {
        lineMsg.style.backgroundColor = '#CF6679'
        lineMsg.style.transform = 'translate(0, 0)'
      } 
      else if (msg.classList.contains('ng-invalid')) {
        lineMsg.style.backgroundColor = '#CF6679'
        lineMsg.style.transform = 'translate(0, 0)'
      }
      else {
        lineMsg.style.backgroundColor = '#03DAC6'
        lineMsg.style.transform = 'translate(0, 0)'
      }
    }) 
    
    // event listner keyup
    name.addEventListener('keyup', (e) => {
      if(name.classList.contains('ng-invalid')) {
          lineName.style.backgroundColor = '#CF6679'
          lineName.style.transform = 'translate(0, 0)'
      } 
        
      if(name.classList.contains('ng-valid')) {
          lineName.style.backgroundColor = '#03DAC6'
          lineName.style.transform = 'translate(0, 0)'
      }
    }) 

    email.addEventListener('keyup', (e) => {
      if(email.classList.contains('ng-invalid')) {
        // if(name.value === '') {
          lineEmail.style.backgroundColor = '#CF6679'
          lineEmail.style.transform = 'translate(0, 0)'
      } 
        
      if(email.classList.contains('ng-valid')) {
          lineEmail.style.backgroundColor = '#03DAC6'
          lineEmail.style.transform = 'translate(0, 0)'
      }
    }) 

    sub.addEventListener('keyup', (e) => {
      if(sub.classList.contains('ng-invalid')) {
          lineSub.style.backgroundColor = '#CF6679'
          lineSub.style.transform = 'translate(0, 0)'
      } 
        
      if(sub.classList.contains('ng-valid')) {
          lineSub.style.backgroundColor = '#03DAC6'
          lineSub.style.transform = 'translate(0, 0)'
      }
    }) 

    msg.addEventListener('keyup', (e) => {
      if(msg.classList.contains('ng-invalid')) {
          lineMsg.style.backgroundColor = '#CF6679'
          lineMsg.style.transform = 'translate(0, 0)'
      } 
        
      if(msg.classList.contains('ng-valid')) {
          lineMsg.style.backgroundColor = '#03DAC6'
          lineMsg.style.transform = 'translate(0, 0)'
      }
    }) 
    

  }

}
