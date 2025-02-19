export interface VueTreeItem {
  id: string;
  label: string;
  icon?: string;
  isExpanded?: boolean;
  children?: VueTreeItem[];
}

export interface VueTreeProps {
  items: VueTreeItem[];
  expandIcon?: string;
  collapseIcon?: string;
  multiple?: boolean;
  parentSelect?: boolean;
  propagateSelect?: boolean;
  layer?: number;
}
