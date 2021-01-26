import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  chosenPost: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts = value);
  }


  getBubble(post: Post): void {
    this.chosenPost = post;
  }

}
