import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

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
import { NgStyleComponent } from './ng-style/ng-style.component';
import { InputFormatDirective } from './input-format.directive';
import { InputTestComponent } from './input-test/input-test.component';
import { StudentComponent } from './student/student.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { ObservablePipeComponent } from './observable-pipe/observable-pipe.component';

import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { CloneGithubFollowerComponent } from './clone-github-follower/clone-github-follower.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveHomeComponent } from './archive-home/archive-home.component';
import { ArchiveComponent } from './archive/archive.component';

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
    NgStyleComponent,
    InputFormatDirective,
    InputTestComponent,
    StudentComponent,
    PostsComponent,
    GithubFollowersComponent,
    ObservablePipeComponent,
    CloneGithubFollowerComponent,
    NavbarComponent,
    GithubProfileComponent,
    HomeComponent,
    NotFoundComponent,
    ArchiveHomeComponent,
    ArchiveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
