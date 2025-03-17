import { Component } from '@angular/core';
import { ConfigService } from '../../../core/config/config.service';
import { CompanyInfo, DefaultCompanyInfo } from '../../../core/constants/companyInfo.constants';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    appName : string;
    companyInfo : CompanyInfo = DefaultCompanyInfo;

    constructor(private config : ConfigService) { 
      this.appName = this.config.applicationName;
  
    }
  
}
