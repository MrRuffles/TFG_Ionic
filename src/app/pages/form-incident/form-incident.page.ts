import { AppComponent } from './../../app.component';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { GeolocalizationService } from 'src/app/services/geolocalization.service';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-incident',
  templateUrl: './form-incident.page.html',
  styleUrls: ['./form-incident.page.scss'],
})
export class FormIncidentPage implements OnInit {
  recording = false;
  mytext:string ="";
  tituloIn:string = "";

  constructor(public photoService: PhotoService, public geoService: GeolocalizationService, private changeDetectorRef: ChangeDetectorRef, public database: DatabaseService, public router:Router) {
    SpeechRecognition.requestPermission();
   }

  ngOnInit() {

  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
    this.addGeoLocation();
  }

  addGeoLocation() {
    this.geoService.locate();
  }

 public async startRecognition() {
  const { available } = await SpeechRecognition.available();

  if(available){
    this.recording = true;
    SpeechRecognition.start({
      language: 'es-ES',
      partialResults:true,
      popup: false
    });

    SpeechRecognition.addListener('partialResults', (data:any) => {
      console.log('partial was fired: ', data.value);
      if(data.value && data.value.lenght > 0){
        this.mytext = data.value[0];
        this.changeDetectorRef.detectChanges();
      }
    })
  }
 }

 public async stopRecognition() {
  this.recording = false;
  await SpeechRecognition.stop();
 }

 public async subirIncidencia(titulo:string, des:string){

  var img1: string | undefined  = "";
  var img2: string | undefined = "";
  var img3: string | undefined = "";
  var cont = 1;

  this.photoService.photos.forEach(photo => {
      switch (cont){
        case 1:
          img1 = photo.base64;
          break;
        case 2:
          img2 = photo.base64;
          break;
        case 3:
          img3 = photo.base64;
          break;
      }
      cont++;
  });

  var loc = this.geoService.locality;
  var lat = this.geoService.latitude;
  var long = this.geoService.longitude;
  var add = this.geoService.address;

  var insert = await this.database.addIncidencia(titulo,des,add,loc,lat,long,img1,img2,img3);
  if(insert) {
    this.tituloIn = "";
    this.photoService.photos = [];
    this.mytext = "";
    this.geoService.address = "";
    this.geoService.latitude = "";
    this.geoService.longitude = "";

    this.router.navigate(["/home"]);
  }
}

}
