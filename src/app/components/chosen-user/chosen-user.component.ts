import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-chosen-user',
  templateUrl: './chosen-user.component.html',
  styleUrls: ['./chosen-user.component.css']
})
export class ChosenUserComponent implements OnInit {

  chosenId: number;
  chosenUser: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.chosenId = +value.id;
      this.chosenUser = null;
      this.userService.getUserById(this.chosenId).subscribe(user => this.chosenUser = user);
    });
  }
}
