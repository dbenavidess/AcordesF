import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-pag-ukelele',
  templateUrl: './pag-ukelele.component.html',
  styleUrls: ['./pag-ukelele.component.css']
})
export class PagUkeleleComponent implements OnInit {

  lessons : any[];

  constructor(private db : FirebaseService) {
   }

  ngOnInit() {
    this.db.getLessons('ukelele')
    .subscribe(algo=>this.lessons=algo)
    console.log(this.lessons)
  }

}
