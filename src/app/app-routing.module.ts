import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ItiComponent } from './iti/iti.component';
import { NewsComponent } from './news/news.component';
import { PgdcaComponent } from './pgdca/pgdca.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: HomeComponent},
{path: 'contact', pathMatch: 'full', component: ContactComponent},
{path: 'admissions', pathMatch: 'full', component: AdmissionsComponent},
{path: 'courses', pathMatch: 'full', component: CoursesComponent},
{path: 'gallary', pathMatch: 'full', component: PhotoGalleryComponent},
{path: 'staff', pathMatch: 'full', component: StaffComponent},
{path: 'news', pathMatch: 'full', component: NewsComponent},
{path: 'iti', pathMatch: 'full', component: ItiComponent},
{path: 'pgdca', pathMatch: 'full', component: PgdcaComponent},
{path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
