import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../service/firebase.service';
import { Usuarios } from '../clases/usuarios';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-pag-login',
  templateUrl: './pag-login.component.html',
  styleUrls: ['./pag-login.component.css']
})
export class PagLoginComponent implements OnInit {

  usuarios: Observable<any[]>;
  user : Usuarios

  constructor(private db: FirebaseService  ) { }

  ngOnInit() {
  }

  onSubmit(userForm : NgForm){

    this.db.insertUser(userForm.value)
    console.log(userForm.value.username)

  }

}
