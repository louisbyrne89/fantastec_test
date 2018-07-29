import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-view',
  templateUrl: './icon-view.component.html',
  styleUrls: ['./icon-view.component.scss']
})
export class IconViewComponent {
  @Input('type') type: string;
  constructor() { }

}
