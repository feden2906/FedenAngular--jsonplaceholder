import {HomeComponent} from './components/home/home.component';
import {PostsComponent} from './components/posts/posts.component';
import {UserPostsComponent} from './components/user-posts/user-posts.component';
import {PhotosComponent} from './components/photos/photos.component';
import {CommentsComponent} from './components/comments/comments.component';
import {UsersComponent} from './components/users/users.component';
import {ChosenUserComponent} from './components/chosen-user/chosen-user.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {Routes} from '@angular/router';
import {UsersResolveService} from './services/resolve/users-resolve.service';



export const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'posts', component: PostsComponent },
  {path: 'posts/userId/:id', component: UserPostsComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'users', component: UsersComponent, resolve: {usersData: UsersResolveService}, children: [
      {path: ':id', component: ChosenUserComponent}
    ]},
  {path: '**', component: NotFoundComponent}
];
