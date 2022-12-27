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

    this.database.addNewUser(name,last,pass,reppass,email);

  }

}
