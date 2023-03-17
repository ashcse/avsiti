import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NewsComponent } from './news/news.component';
import { CoursesComponent } from './courses/courses.component';
import { StaffComponent } from './staff/staff.component';
import { AdmissionsComponent } from './admissions/admissions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,    
    PhotoGalleryComponent,
    NewsComponent,
    CoursesComponent,
    StaffComponent,
    AdmissionsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
