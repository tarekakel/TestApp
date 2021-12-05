import { Pipe } from '@angular/core';

@Pipe({
  name: 'treeNodeSearch',
  pure: false,
})
export class TreeNodeSearchPipe {
  store: any[] = [];
  transform(value: any[], [queryString]: any) {
    this.store.length = 0;
    this.store.push(
      ...value.filter(
        (node) =>
          node.name.includes(queryString) ||
          node.containsName(queryString) ||
          node.parent.name.includes(queryString)
      )
    );
    return this.store;
  }
}
