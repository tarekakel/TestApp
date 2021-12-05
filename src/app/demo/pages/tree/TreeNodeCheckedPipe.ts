import { Pipe } from '@angular/core';

@Pipe({
  name: 'treeNodeChecked',
  pure: false,
})
export class TreeNodeCheckedPipe {
  store: any[] = [];
  transform(node: any[]) {
    this.store.length = 0;
    this.store.push(...node.filter((node) => node.checked));
    return this.store;
  }
}
