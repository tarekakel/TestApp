import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TreeNode } from './TreeNode';

@Component({
  selector: 'treeview',
  styleUrls: ['./tree.component.scss'],
  template: `
    <ng-content select="[header]"></ng-content>

    <div class="container" [ngSwitch]="isChecked">
      <ul style="font-size:large">
        <li *ngFor="let node of store">
          <span class="{{ uiClassPrefix }}-nodeButton" (click)="node.toggle()"
            >{{ node.icon }}
          </span>
          <input
            type="checkbox"
            [checked]="node.checked"
            [indeterminate]="false"
            [disabled]="false"
            (click)="node.check()"
          />
          {{ node.name }}
          <div *ngIf="node.expanded">
            <treeview
              [store]="node.nodes"
              [uiClassPrefix]="uiClassPrefix"
              [queryEl]="queryEl"
            ></treeview>
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class TreeView {
  @Input() queryEl: AbstractControl | undefined;
  @Input() isChecked: Boolean | undefined;
  @Input() store: Array<TreeNode> | undefined;
  @Input() uiClassPrefix: string | undefined;
}
