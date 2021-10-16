import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //per la gestione del dato
  private urlUsersAPI = 'https://jsonplaceholder.typicode.com/users/';

  constructor(
    private http: HttpClient
  ) { }

  //metodo di lettura dell'intero dato. Ritorna un observable con i dati. 
  getAllUsers() {
    return this.http.get(this.urlUsersAPI)
  }

  //metodo per la cancellazione del singolo dato tramite id
  deleteUser(id: number) {
    return this.http.delete(this.urlUsersAPI + id)
  }

  //metodo di lettura del singolo oggetto-user tramite id per il componente update-user-form
  getUser(id: number) {
    return this.http.get(this.urlUsersAPI + id)
  }

  //metodo per modificare un utente specifico 
  updateUser(user: any) {
    return this.http.put(this.urlUsersAPI + user.id, user)
  }

  //metodo per inserimento dati
  createUser(user: any) {
    return this.http.post(this.urlUsersAPI, user)
  }
}

