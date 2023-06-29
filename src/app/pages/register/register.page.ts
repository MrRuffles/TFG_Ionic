import { Router } from '@angular/router';
import { DatabaseService } from './../../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  namereg:string="";
  passreg:string="";
  emailreg:string="";
  telreg:string="";
  locreg:string="";
  reppass:string="";

  constructor(public database: DatabaseService, public router:Router) { }

  ngOnInit() {
  }

  public async register(name:string, pass:string, reppass:string, email:string, telephone:string, location:string) {

    var user = await this.database.addNewUser(name,pass,reppass,email, telephone, location);
    if(user) this.router.navigate(['/home']);

  }

}
