export type VueAccordionItems<T = unknown> = {
  key: string;
  title?: string;
  content?: T | string;
};

export type VueAccordionProps<T> = {
  items: T[];
  type: "single" | "multiple";
  disabled?: boolean;
};
