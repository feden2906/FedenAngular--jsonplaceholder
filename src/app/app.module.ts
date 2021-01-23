import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PostComponent} from './post/post.component';
import {PostsComponent} from './posts/posts.component';
import {ChosenPostComponent} from './chosen-post/chosen-post.component';
import {HeaderComponent} from './header/header.component';
import {LoadingComponent} from './loading/loading.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { UserComponent } from './user/user.component';
import { ChosenUserComponent } from './chosen-user/chosen-user.component';


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
    ChosenUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent},
      {path: 'photos', component: PhotosComponent},
      {path: 'users', component: UsersComponent, children: [
        {path: ':id', component: ChosenUserComponent}
      ]},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
