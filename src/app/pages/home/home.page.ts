import { StorageService } from 'src/app/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [StorageService]
})
export class HomePage implements OnInit {

  incidencias: any[] | undefined | null ;

  constructor(public database: DatabaseService, public storage:StorageService) { }
  async ngOnInit() {
    var loc = await this.storage.get("Localidad");
    this.getIncidencias(loc);
  }

  async getIncidencias(localidad: string){
    this.incidencias = await this.database.getIncidenciasbyLocation(localidad);
  }

}
