import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FullnamePipe } from './pipes/fullname.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    LoaderComponent,
    FullnamePipe 
  ],
  imports: [
    CommonModule,
    MatToolbar
  ],
  exports:[
    HeaderComponent,  
    FooterComponent,
    MainLayoutComponent
  ],
})
export class SharedModule { }
