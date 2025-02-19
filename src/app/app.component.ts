import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS; // getting data from json file
  selectedUserId?: string; // save id when user click on each user

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId); // it return the first match value if not match then return you undefined
  }

  onSelectUser(id: string) {
    this.selectedUserId = id; // save selected user 
    console.log(`Selected user: ${this.selectedUserId}`);
  }
}
