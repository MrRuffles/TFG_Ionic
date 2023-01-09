import { NativeGeocoder, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
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

    var add = result[0].thoroughfare+", " + result[0].subThoroughfare+", "+ result[0].postalCode + ", " +result[0].subLocality;
    return add;

  }

}
