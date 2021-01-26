import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../models/post';

@Component({
  selector: 'app-chosen-post',
  templateUrl: './chosen-post.component.html',
  styleUrls: ['./chosen-post.component.css']
})
export class ChosenPostComponent implements OnInit {

  @Input()
  post: Post;

  @Output()
  bubbleUp = new EventEmitter();


  ngOnInit(): void {
    console.log('this.post');
    console.log(this.post);
  }

  closePost(): void {
    // this.post = null;
     this.bubbleUp.emit(null);
  }
}
