import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-pag-instru',
  templateUrl: './pag-instru.component.html',
  styleUrls: ['./pag-instru.component.css']
})
export class PagInstruComponent implements OnInit {

  lessons : any[];

  constructor(private db : FirebaseService) {
   }

  ngOnInit() {
    this.db.getLessons('guitarra')
    .subscribe(algo=>this.lessons=algo)
    console.log(this.lessons)
  }



}
