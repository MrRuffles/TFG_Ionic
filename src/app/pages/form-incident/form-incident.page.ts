import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { GeolocalizationService } from 'src/app/services/geolocalization.service';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
@Component({
  selector: 'app-form-incident',
  templateUrl: './form-incident.page.html',
  styleUrls: ['./form-incident.page.scss'],
})
export class FormIncidentPage implements OnInit {
  recording = false;
  mytext ="";

  constructor(public photoService: PhotoService, public geoService: GeolocalizationService, private changeDetectorRef: ChangeDetectorRef) {
    SpeechRecognition.requestPermission();
   }

  ngOnInit() {
    this.addGeoLocation();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
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

}
