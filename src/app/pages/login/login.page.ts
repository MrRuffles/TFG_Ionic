import { DatabaseService } from 'src/app/database.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emaillog:string = "";
  pass:string = "";
  constructor(public dataService:DatabaseService, private router:Router) { }

  ngOnInit() {
  }

  public async login(email:string, password:string){
    var user = await this.dataService.readUser(email,password);
    if(user) this.router.navigate(['/home']);
  }

}
