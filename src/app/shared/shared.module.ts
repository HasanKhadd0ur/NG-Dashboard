import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { EmptyResultComponent } from './components/empty-result/empty-result.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    LoaderComponent,
    PaginationComponent,
    EmptyResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatToolbar
  ],
  exports:[
    HeaderComponent,  
    FooterComponent,
    MainLayoutComponent,
    PaginationComponent,
    EmptyResultComponent
  ],
})
export class SharedModule { }
