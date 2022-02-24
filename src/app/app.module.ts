import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyComponent } from './mycomponent.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { BooksComponent } from './books/books.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { SummaryPipe } from './summary.pipe';
import { IconsComponent } from './icons/icons.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TweetComponent } from './tweet/tweet.component';
import { PanelComponent } from './panel/panel.component';
import { LoveComponent } from './love/love.component';
import { InstagramComponent } from './instagram/instagram.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirecticeSwitchComponent } from './directice-switch/directice-switch.component';
import { DirectiveForComponent } from './directive-for/directive-for.component';
import { DirectiveForTrackComponent } from './directive-for-track/directive-for-track.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CourseComponent,
    BooksComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipesComponent,
    SummaryPipe,
    IconsComponent,
    FavoriteComponent,
    TweetComponent,
    PanelComponent,
    LoveComponent,
    InstagramComponent,
    InstagramFeedComponent,
    DirectiveIfComponent,
    DirecticeSwitchComponent,
    DirectiveForComponent,
    DirectiveForTrackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
