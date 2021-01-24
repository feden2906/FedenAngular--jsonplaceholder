import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  posts: Post[];
  chosenPost: Post;
  userId: number;
  userName: string;

  constructor(private userService: UserService, private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.userId = +id);
    this.userService.getUserById(this.userId).subscribe(({username}) => this.userName = username);
    this.postService.getAllPostsChosenUser(this.userId).subscribe(value => this.posts = value);
  }

  getBubble(post: Post): void {
    this.chosenPost = post;
  }
}
