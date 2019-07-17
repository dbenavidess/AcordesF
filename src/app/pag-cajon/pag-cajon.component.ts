import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-pag-cajon',
  templateUrl: './pag-cajon.component.html',
  styleUrls: ['./pag-cajon.component.css']
})
export class PagCajonComponent implements OnInit {

  lessons : any[];

  constructor(private db : FirebaseService) {
   }

  ngOnInit() {
    this.db.getLessons('cajon')
    .subscribe(algo=>this.lessons=algo)
    console.log(this.lessons)
  }

}
