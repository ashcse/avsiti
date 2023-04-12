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
import { InfoComponent } from './info/info.component';
import { ElectricComponent } from './electric/electric.component';
import { CarpenterComponent } from './carpenter/carpenter.component';
import { CompScienceComponent } from './comp-science/comp-science.component';
import { RefrigerationComponent } from './refrigeration/refrigeration.component';
import { AirCondComponent } from './air-cond/air-cond.component';

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
    AdmissionsComponent,
    InfoComponent,
    ElectricComponent,
    CarpenterComponent,
    CompScienceComponent,
    RefrigerationComponent,
    AirCondComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
