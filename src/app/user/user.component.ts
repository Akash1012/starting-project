import { Component, signal, computed, Input, input, Output, output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'


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
  }) avatar!: string
  @Input({
    required: true
  }) name!: string;

  @Input({
    required: true
  }) id!: string

  // @Output() select = new EventEmitter();

  select = output<string>()



  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }

}



// avatar = input.required<string>();

// imagePath = computed(() => `assets/users/${this.avatar()}`);