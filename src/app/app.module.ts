import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {ChosenPostComponent} from './components/chosen-post/chosen-post.component';
import {HeaderComponent} from './components/header/header.component';
import {LoadingComponent} from './components/loading/loading.component';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {PhotosComponent} from './components/photos/photos.component';
import {CommentsComponent} from './components/comments/comments.component';
import {UserComponent} from './components/user/user.component';
import {ChosenUserComponent} from './components/chosen-user/chosen-user.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {UserPostsComponent} from './components/user-posts/user-posts.component';
import {routes} from './routes';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    ChosenPostComponent,
    HeaderComponent,
    LoadingComponent,
    HomeComponent,
    UsersComponent,
    PhotosComponent,
    CommentsComponent,
    UserComponent,
    ChosenUserComponent,
    NotFoundComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
