import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
@Component({
  selector: 'app-form-incident',
  templateUrl: './form-incident.page.html',
  styleUrls: ['./form-incident.page.scss'],
})
export class FormIncidentPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
