import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/demo/framework/core/base-component';

@Component({
  selector: 'app-violation-list',
  templateUrl: './violation-list.component.html',
  styleUrls: ['./violation-list.component.scss'],
})
export class ViolationListComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }
  override ngOnInit(): void {}
}
