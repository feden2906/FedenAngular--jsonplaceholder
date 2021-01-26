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
  showEditForm = false;
  editingUser: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.chosenId = +value.id;
      this.chosenUser = null;
      this.userService.getUserById(this.chosenId).subscribe(user => this.chosenUser = user);
    });
  }

  editUserInfo(): void {
    this.showEditForm = true;
    this.editingUser = this.chosenUser;
  }

  saveUserInfo(): void {
    this.showEditForm = false;
    console.log(this.editingUser);
    this.chosenUser = this.editingUser;
  }

  closeEditing(): void {
    this.editingUser = null;
    this.showEditForm = false;
  }

  editUsername(e): void {this.editingUser.username = e.target.value; }
  editEmail(e): void {this.editingUser.email = e.target.value; }

  editStreet(e): void {this.editingUser.address.street = e.target.value; }
  editSuite(e): void {this.editingUser.address.suite = e.target.value; }
  editCity(e): void {this.editingUser.address.city = e.target.value; }
  editZipcode(e): void {this.editingUser.address.zipcode = e.target.value; }
  editLat(e): void {this.editingUser.address.geo.lat = e.target.value; }
  editLng(e): void {this.editingUser.address.geo.lng = e.target.value; }

  editCompanyName(e): void {this.editingUser.company.name = e.target.value; }
  editCatchPhrase(e): void {this.editingUser.company.catchPhrase = e.target.value; }
  editBs(e): void {this.editingUser.company.bs = e.target.value; }
}
