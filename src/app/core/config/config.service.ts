import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  constructor() { }


  apiEndpoint: string = environment.API_BASE_URL;
  applicationName: string = environment.APPLICATION_NAME;
    
}
