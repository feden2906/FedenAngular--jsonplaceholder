import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  chosenUser: User;
  @Input()
  user: User;

  @Output()
  bubbleUp = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  choseUser(chosenUser: User): void {
    this.bubbleUp.emit(chosenUser);
  }
  closeUser(): void {
    this.bubbleUp.emit(null);
  }
}
