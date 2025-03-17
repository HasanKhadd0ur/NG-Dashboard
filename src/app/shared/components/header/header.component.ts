import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../core/config/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  standalone: false,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  appName : string;

  constructor(private config : ConfigService) { 
    this.appName = this.config.applicationName;

  }

  ngOnInit(): void {
  }

}
