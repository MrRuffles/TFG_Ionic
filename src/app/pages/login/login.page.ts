import { DatabaseService } from 'src/app/database.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [StorageService]
})
export class LoginPage implements OnInit {

  emaillog:string = "";
  pass:string = "";
  constructor(public dataService:DatabaseService, private router:Router, private storage:StorageService) { }

  ngOnInit() {
  }

  public async login(email:string, password:string){
    var user = await this.dataService.readUser(email,password);
    var profile = await this.dataService.getUser();

    await this.storage.set('Email', profile?.[0].email);
    await this.storage.set('Name', profile?.[0].name);
    await this.storage.set('Localidad', profile?.[0].localidad);
    await this.storage.set('Telefono', profile?.[0].telefono);
    if(user) this.router.navigate(['/home']);
  }

}
