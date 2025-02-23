import { Component, signal, computed, Input, input, Output, output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: false,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({
    required: true
  }) user!: User

  @Input({
    required: true
  }) selected!: boolean


  // @Output() select = new EventEmitter<string>();

  select = output<string>() // new way to emit (send data from child to parent component)



  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}



// avatar = input.required<string>();

// imagePath = computed(() => `assets/users/${this.avatar()}`);