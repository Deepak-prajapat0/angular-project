import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseService } from './courses.service';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
