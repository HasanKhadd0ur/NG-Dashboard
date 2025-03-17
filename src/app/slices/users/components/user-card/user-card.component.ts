import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user-card',
  standalone: false,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user : User;
  online:boolean=Math.ceil(Math.random()*100) > 50
}
