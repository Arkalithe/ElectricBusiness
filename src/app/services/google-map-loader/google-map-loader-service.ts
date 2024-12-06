import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsLoaderService {
  private scriptLoaded = false;
  apikey = import.meta.env.NG_APP_GOOGLE_MAP_API_KEY;

  load(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.scriptLoaded) {
        resolve();
        return;
      }
      console.log(this.apikey);
      console.log('_NGX_ENV_:', _NGX_ENV_);
      console.log('GOOGLE_MAP_API_KEY:', environment.NG_APP_GOOGLE_MAP_API_KEY);
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apikey}&libraries=places`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        this.scriptLoaded = true;
        resolve();
      };

      script.onerror = (error) => reject(error);

      document.head.appendChild(script);
    });
  }
}
