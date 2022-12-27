import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizationService {

  public address: string = "";
  public coords: any;
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 1
  };

  constructor(private nativeGeocoder:NativeGeocoder) { }

  public async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords = coordinates;
    const res = await this.addresLocalization(this.coords);

    this.address = res;
  }

  async addresLocalization(cordinates: Position){
    const result = await this.nativeGeocoder.reverseGeocode(cordinates.coords.latitude, cordinates.coords.longitude, this.options);

    return JSON.stringify(result[0]);
  }

}
