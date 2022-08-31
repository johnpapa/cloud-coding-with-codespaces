import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  template: `
    <div class="card-content">
      <div class="card-content">
        <div class="content columns">
          <div class="column is-9">
            <div class="name">{{ name }}</div>
            <div class="description">{{ description }}</div>
            <div class="description">Quantity: {{ quantity }}</div>
          </div>
          <div class="column is-3">
            <i [class]="imageClass" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CardContentComponent {
  @Input() name;
  @Input() description;
  @Input() quantity;
  @Input() imageClass;
}
