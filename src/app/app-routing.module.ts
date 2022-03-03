import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { ArchiveHomeComponent } from './archive-home/archive-home.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'followers/:user', component: GithubProfileComponent },
  { path: 'followers', component: GithubFollowersComponent },
  { path: 'archive-home', component: ArchiveHomeComponent },
  { path: 'archive/:year/:month', component: ArchiveComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
