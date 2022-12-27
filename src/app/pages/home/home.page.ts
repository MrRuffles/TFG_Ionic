import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public database: DatabaseService) { }

  ngOnInit() {
    //this.getIncidencias();
  }

  getIncidencias(){
    var location:string = "";
    this.database.getIncidenciasbyLocation(location)
  }

}
