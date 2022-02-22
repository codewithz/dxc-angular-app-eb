import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './mycomponent.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { BooksComponent } from './books/books.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CourseComponent,
    BooksComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
