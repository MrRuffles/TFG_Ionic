import { DatabaseService } from './../../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public database: DatabaseService) { }

  ngOnInit() {
  }

  public async register(name:string, last:string, pass:string, reppass:string, email:string) {

    //await this.database.client.connect();

    if(pass == reppass){

      var salt = email.split('@')[0];

      var hashedPass = this.database.hashPasword(pass,salt);


      //const db = this.database.client.db(this.database.database);

      //TODO: Insert new user to User Document BSON.

    }

    //this.database.client.close();

  }

}
