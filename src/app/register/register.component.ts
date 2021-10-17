import { getParseErrors } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  RegisterUser(event){
    event.preventDefault()
    const errors = []
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    
    //Validation

    if(errors.length === 0){
      this.auth.registerUser(email, password).subscribe(data => {
        console.log(data)
        if(data.success){
          this.router.navigate(['dash'])
        }
      })

    }

    console.log(email, password)
  }

}
