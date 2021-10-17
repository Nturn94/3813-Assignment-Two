import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private Auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    


    this.Auth.getUserDetails(email, password).subscribe(data => {
      if(data.success){
        this.router.navigate(['dash'])
      }else{
        window.alert(data.message)
      }
    })
    console.log(email, password)
  }

}
