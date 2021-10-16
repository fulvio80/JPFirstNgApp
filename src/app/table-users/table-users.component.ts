import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {

  //variabile da popolare con i dati chiamati dal server
  users: any;
  
  
  closeResult = '';
  
  //variabile per il modal
  userDetail: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    //restituzione dell'observable in lettura dal service iniettato tramite constructor. E successivo abbonamento per manipolazione. 
    this.userService.getAllUsers().subscribe(resp => this.users = resp)
  }

  //restituzione dell'observable vuoto
  removeUser(item: any) {
    this.userService.deleteUser(item.id).subscribe(resp => console.log(resp))
    //simulazione del delete
    this.users = this.users.filter((user: { id: any; }) => user.id !== item.id)
  }
  //metodo per navigazione sul componente di aggiornamento dato
  updateUser(item: any) {
    this.router.navigate(['/users', item.id, 'edit'])
  }

  infoUser(item: any, content: any) {
    this.userDetail = item;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}


