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
        await this.app.emailPasswordAuth.registerUser({email:email, password:password});

        var user = await this.app.logIn(Realm.Credentials.emailPassword(email,password));

        const mongodb = this.app.currentUser?.mongoClient("mongodb-atlas");
        const collection = mongodb?.db("TFG").collection("profile");

        const resp = await collection?.insertOne(
          { userID: this.app.currentUser?.id, name: name, telefono: tel, localidad: loc, email: email}
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

  public async addIncidencia(titulo:string, des:string, add:string,loc:string, lat:string, long:string, img1:any, img2:any, img3:any){
    try{
      const mongodb = this.app.currentUser?.mongoClient("mongodb-atlas");
      const collection = mongodb?.db("TFG").collection("incidencia");

      await collection?.insertOne(
        { userID: this.app.currentUser?.id, titulo: titulo, descripcion: des, direccion: add, localidad: loc, latitud: lat, longitud: long, imagen1: img1, imagen2: img2, imagen3: img3 }
      );

      return true;
    }catch(error){
      console.log("No se ha podido añadir incidencias, prueba de nuevo.");
      return false;
    }
  }

  public async readUser(email:string, pass:string){
    var credentials = Realm.Credentials.emailPassword(email,pass);

    try{
      var user = await this.app.logIn(credentials);
      return user;
    }catch(err){
      console.log("No se ha podido Iniciar Sesion, prueba de nuevo.");
      return null;
    }
  }

  public async getUser(){

    try{
      const mongodb = this.app.currentUser?.mongoClient("mongodb-atlas");
      const collection = mongodb?.db("TFG").collection("profile");

      const resp = await collection?.find({userID: this.app.currentUser?.id});

      return resp;
    }catch(error){
      console.log("No se ha podido encontrar usuario, prueba de nuevo.");
      return null;
    }

  }

}


