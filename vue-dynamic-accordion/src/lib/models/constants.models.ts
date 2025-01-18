import { VueAccordionItems } from "../../components/VueAccordion";

export interface CommonItems extends VueAccordionItems {
  title: string;
  content: string;
}

interface AccordionItemsContentOptions {
  name: string;
  value: string;
}

export interface AccordionItemsContent {
  key: string;
  label: string;
  value: string;
  type: string;
  options?: AccordionItemsContentOptions[];
  ref?: string;
  required?: boolean;
  children?: AccordionItemsContent[];
}

export interface AccordionItems extends Omit<VueAccordionItems, "content"> {
  title: string;
  icon: string;
  content: AccordionItemsContent[];
}
