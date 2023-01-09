import { Injectable } from '@angular/core';
import { appendFile } from 'fs';
//import { MongoClient, ServerApiVersion } from 'mongodb';
import * as Realm from "realm-web";
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  //TODO: Import new module to hash.
  constructor() { }

  app = new Realm.App({ id: "tfg-app-zsokw" });

  public async addNewUser(name:string, password:string, reppass:string, email:string, tel:string, loc:string) {

    if(reppass == password){
      try{
        await this.app.emailPasswordAuth.registerUser({email, password });

        var user = await this.app.logIn(Realm.Credentials.emailPassword(email,password));

        const mongodb = this.app.currentUser?.mongoClient("mongodb-atlas");
        const collection = mongodb?.db("TFG").collection("profile");

        const resp = await collection?.insertOne(
          { userID: this.app.currentUser?.id, name: name, telefono: tel, localidad: loc}
        );

        return user;

      }catch(error){
        console.log("No se ha podido Registar el usuario, prueba de nuevo.");
        return null;
      }
    }

    return null;
  }

  public async getIncidenciasbyLocation(location:string){

    try{
      const mongodb = this.app.currentUser?.mongoClient("mongodb-atlas");
      const collection = mongodb?.db("TFG").collection("incidencia");

      const resp = await collection?.find({localidad: location});

      return resp;
    }catch(error){
      console.log("No se ha podido encontrar incidencias, prueba de nuevo.");
      return null;
    }
  }

  public async readUser(email:string, pass:string){
    var credentials = Realm.Credentials.emailPassword(email,pass);

    console.log(credentials);
    try{
      var user = await this.app.logIn(credentials);
      return user;
    }catch(err){
      console.log("No se ha podido Iniciar Sesion, prueba de nuevo.");
      return null;
    }
  }

}


