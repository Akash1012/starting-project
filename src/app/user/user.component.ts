import { Component, signal, computed, Input, input, Output, output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'


// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({
    required: true
  }) user!: User


  // @Output() select = new EventEmitter<string>();

  select = output<string>()



  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}



// avatar = input.required<string>();

// imagePath = computed(() => `assets/users/${this.avatar()}`);