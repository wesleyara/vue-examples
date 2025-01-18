import { AccordionItems, CommonItems } from "./models/constants.models";

export const items: CommonItems[] = [
  {
    key: "1",
    title: "First Item",
    content: "First Item Content",
  },
  {
    key: "2",
    title: "Second Item",
    content: "Second Item Content",
  },
  {
    key: "3",
    title: "Third Item",
    content: "Third Item Content",
  },
];

export const accordionItems: AccordionItems[] = [
  {
    key: "ato",
    title: "Consolidação da situação jurídica",
    icon: "check",
    content: [
      {
        key: "ato",
        label: "Ato da matrícula",
        value: "",
        type: "select",
        options: [
          {
            name: "Averbação",
            value: "averbacao",
          },
          {
            name: "Registro",
            value: "registro",
          },
        ],
        children: [
          {
            key: "child_ato_averbacao",
            label: "Tipo de Averbação",
            value: "",
            type: "text",
            ref: "averbacao",
          },
          {
            key: "child_ato_registro",
            label: "Tipo de Registro",
            value: "",
            type: "text",
            ref: "registro",
          },
        ],
      },
    ],
  },
];
