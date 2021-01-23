import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../models/Post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
  @Input()
  chosenPost: Post;

  @Output()
  bubbleUp = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  getBodyFromChosenPost(post: Post): void {
    this.bubbleUp.emit(post);
  }

  closePost(): void {
    this.bubbleUp.emit(null);
  }

}
