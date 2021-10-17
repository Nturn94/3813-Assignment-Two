import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  rank = "Loading....."
  email = ""
  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user.getData().subscribe(data => {
      if(data.status){
        this.rank = data.rank
        this.email = data.email
      }else{
        this.router.navigate(['logout'])
      }

    })
  }

}
