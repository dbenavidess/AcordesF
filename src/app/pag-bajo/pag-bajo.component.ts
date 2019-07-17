import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-pag-bajo',
  templateUrl: './pag-bajo.component.html',
  styleUrls: ['./pag-bajo.component.css']
})
export class PagBajoComponent implements OnInit {

  lessons : any[];

  constructor(private db : FirebaseService) {
   }

  ngOnInit() {
    this.db.getLessons('bajo')
    .subscribe(algo=>this.lessons=algo)
    console.log(this.lessons)
  }

}
