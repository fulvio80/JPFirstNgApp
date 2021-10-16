import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {
  //inizializzare user
  user: any = {name: '', username: '', email: '', phone: '', website: ''};

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  
  saveUser() {
    this.userService.createUser(this.user)
    .subscribe(resp => console.log(resp)); //i nuovi dati stampati in console
    this.router.navigate(['users'])
  }



}
