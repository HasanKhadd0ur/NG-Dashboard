import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmptyResultComponent } from './components/empty-result/empty-result.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HoverCardDirective } from './directives/hover-card/hover-card.directive';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    LoaderComponent,
    PaginationComponent,
    EmptyResultComponent,
    NotfoundComponent

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
    EmptyResultComponent,
    NotfoundComponent
  
  ],
})
export class SharedModule { }
