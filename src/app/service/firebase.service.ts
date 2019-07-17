import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Observable } from 'rxjs';
import { Usuarios } from '../clases/usuarios';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  kejesto: AngularFireList<any>;
  lista: Observable<any[]>;
  SelectedUser : Usuarios = new Usuarios();


  constructor(private db:AngularFireDatabase) {

   }

  getUsers(){
    this.kejesto =this.db.list('/usuarios')
    return this.lista = this.db.list('/usuarios').
    valueChanges(); /*as Observable<any[]>*/   }

  insertUser(user: Usuarios) {
    this.kejesto =this.db.list('/usuarios')
    this.kejesto.push(user)
  }
  getLessons(instrumento){
    return this.lista =this.db.list(instrumento).valueChanges()
  }



}
