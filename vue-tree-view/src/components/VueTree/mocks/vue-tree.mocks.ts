import type { VueTreeItem } from "../models/vue-tree.models";

export const treeNodes: VueTreeItem[] = [
  {
    id: "0",
    label: "Root",
    isExpanded: true,
    children: [
      {
        id: "1",
        label: "Child 1",
        children: [
          {
            id: "2",
            label: "Child 1.1",
            children: [
              {
                id: "3",
                label: "Child 1.1.1",
                children: [
                  {
                    id: "4",
                    label: "Child 1.1.1.1",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "5",
    label: "Child 2",
    children: [
      {
        id: "6",
        label: "Child 2.1",
        children: [],
      },
    ],
  },
  {
    id: "7",
    label: "Child 3",
    children: [
      {
        id: "8",
        label: "Child 3.1",
        children: [],
      },
    ],
  },
];
