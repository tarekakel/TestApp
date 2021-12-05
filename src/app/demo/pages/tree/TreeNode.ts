export class TreeNode {
  expanded: boolean = false;
  checked: boolean = false;
  count: number = 0;

  constructor(
    public name: string,
    public nodes: Array<TreeNode> // public parent:TreeNode
  ) {}
  toggle() {
    this.expanded = !this.expanded;
  }

  containsChecked() {
    let checkedNodes: TreeNode[];
    if (this.nodes && this.nodes.length) {
      checkedNodes = this.nodes.filter(function (node) {
        return node.checked;
      });
    }
    return checkedNodes!.length > 0;
  }

  containsName(name: any) {
    var query = name;
    let matchingNodes: TreeNode[];
    if (this.nodes && this.nodes.length) {
      matchingNodes = this.nodes.filter((node) => {
        return node.name.includes(query);
      });
    }
    return matchingNodes!.length > 0;
  }

  get icon() {
    if (!this.nodes.length) {
      return null;
    }
    if (this.expanded) {
      return '-';
    }
    return '+';
  }

  check() {
    debugger;
    console.log(this.nodes.length);
    if (this.count > 6) {
      alert('Maximum can be 6');
    }

    this.checked = this.expanded = !this.checked;

    if (this.checked) {
      this.count++;
    } else {
      this.count--;
    }
    /* if (this.parent) {
            this.parent.checked = this.parent.containsChecked();
        } */
    this.checkRecursive(this.checked);
  }
  checkRecursive(state: boolean) {
    this.nodes.forEach((node) => {
      node.checked = node.expanded = state;
      node.checkRecursive(state);
    });
  }
}
