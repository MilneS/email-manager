import { SingleTemplate, Template } from "./appStore/interface/interface.model";

export const firstTemplate: Template = {
  isReorderable: true,
  comps: [
    { name: "Headline", el: "h4", maxChar: 10, id: "Headline" },
    { name: "Subject", el: "h6", maxChar: 15, id: "Subject" },
    { name: "Body", el: "body1", maxChar: 30, id: "Body" },
    { name: "Signature", el: "body2", maxChar: 10, id: "Signature" },
  ],
};

export const templates: SingleTemplate[] = [
  {
    id: "firstTemplate",
    isReorderable: true,
    comps: [
      { name: "Headline", el: "h4", maxChar: 10, id: "Headline" },
      { name: "Subject", el: "h6", maxChar: 15, id: "Subject" },
      { name: "Body", el: "body1", maxChar: 30, id: "Body" },
      { name: "Signature", el: "body2", maxChar: 10, id: "Signature" },
    ],
  },
  {
    id: "secondTemplate",
    isReorderable: true,
    comps: [
      { name: "Subject", el: "h6", maxChar: 15, id: "Subject" },
      { name: "Headline", el: "h4", maxChar: 10, id: "Headline" },
      { name: "Subject", el: "h6", maxChar: 15, id: "Subject" },
      { name: "Body", el: "body1", maxChar: 30, id: "Body" },
      { name: "Signature", el: "body2", maxChar: 10, id: "Signature" },
    ],
  },
  {
    id: "thirdTemplate",
    isReorderable: true,
    comps: [
      { name: "Signature", el: "body2", maxChar: 10, id: "Signature" },
      { name: "Headline", el: "h4", maxChar: 10, id: "Headline" },
      { name: "Body", el: "body1", maxChar: 30, id: "Body" },
      { name: "Subject", el: "h6", maxChar: 15, id: "Subject" },
      { name: "Body", el: "body1", maxChar: 30, id: "Body" },
    ],
  },
  {
    id: "fourthTemplate",
    isReorderable: true,
    comps: [
      { name: "Headline", el: "h4", maxChar: 10, id: "Headline" },
      { name: "Subject", el: "h6", maxChar: 15, id: "Subject" },
      { name: "Signature", el: "body2", maxChar: 10, id: "Signature" },
      { name: "Body", el: "body1", maxChar: 30, id: "Body" },
    ],
  },
];
