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
}


