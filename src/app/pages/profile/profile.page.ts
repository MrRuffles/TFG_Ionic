import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
//import * as Realm from "realm-web";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  //app = new Realm.App({ id: "tfg-app-zsokw" });
  email = "";
  telefono = "";
  name= "";
  localidad = "";

  constructor(public database: DatabaseService, public storage:StorageService) {
   }

  ngOnInit() {
    this.infoUser();
  }

  private async infoUser(){
    this.email = await this.storage.get("Email");
    this.name = await this.storage.get("Name");
    this.localidad = await this.storage.get("Localidad");
    this.telefono = await this.storage.get("Telefono");
  }

}
