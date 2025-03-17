import { Component, Input } from '@angular/core';

@Component({
  selector: 'empty-result',
  standalone: false,
  templateUrl: './empty-result.component.html',
  styleUrl: './empty-result.component.css'
})
export class EmptyResultComponent {
  @Input() message:string
  @Input() descrption :String
}
