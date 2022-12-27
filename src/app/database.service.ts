import { Injectable } from '@angular/core';
//import { MongoClient, ServerApiVersion } from 'mongodb';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  //TODO: Import new module to hash.
  constructor() { }

  public uri = "mongodb+srv://tfg2022:kxthw56GXxHyoNvc@tfg.uikys.mongodb.net/?retryWrites=true&w=majority";
  //public client = new MongoClient(this.uri, {serverApi:ServerApiVersion.v1});
  public database = "TFG";

  public hashPasword(pass:string, salt:string){
    var hashed;

    //TODO: Code of hashing.

    return hashed;
  }

  public verifyPassword(pass:string, salt:string, hash:string){


    //TODO: Code of verify hash.

    return true;
  }

  public async addNewUser(name:string, last:string, pass:string, reppass:string, email:string) {

    //await this.client.connect();

    if(pass == reppass){

      var salt = email.split('@')[0];

      var hashedPass = this.hashPasword(pass,salt);


      //const db = this.client.db(this.database);

      //TODO: Insert new user to User Document BSON.

    }

    //this.client.close();

  }

  public async getIncidenciasbyLocation(location:string){
    //await this.client.connect();
    //const db = this.client.db(this.database);

    //TODO: Get BSON of the incidencias meterlas en un objeto.

  }

}


