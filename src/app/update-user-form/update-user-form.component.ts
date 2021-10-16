import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.css']
})
export class UpdateUserFormComponent implements OnInit {

  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  //dentro params c'è l'oggetto con tutti i parametri (tra cui l'id) passati tramite url dal component table-users
  ngOnInit(): void {
    this.route.params.subscribe(resp => 
      this.userService.getUser(resp.id) //metodo che ritorna dal service l'observable del singolo user
      .subscribe(user => this.user = user)

      )
  }

  //salvo la modifica stampando in console
  saveUser() {
    this.userService.updateUser(this.user).subscribe(resp => console.log(resp))
    this.router.navigate(['users']) //indirizzo la rotta su users dopo la modifica del dato
  }

}
