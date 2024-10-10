import { LoginField, Template } from "./appStore/interface/interface.model";

export const templates: Template[] = [
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
      { name: "Subject", el: "h6", maxChar: 15, id: "Subject1" },
      { name: "Headline", el: "h4", maxChar: 10, id: "Headline" },
      { name: "Subject", el: "h6", maxChar: 15, id: "Subject2" },
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
      { name: "Body", el: "body1", maxChar: 30, id: "Body1" },
      { name: "Subject", el: "h6", maxChar: 15, id: "Subject" },
      { name: "Body", el: "body1", maxChar: 30, id: "Body2" },
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

export const loginFields: LoginField[] = [
  {
    name: "Email",
    id: "loginEmail",
    isRequired: "Please enter an email",
    minLength: 8,
    maxLength: 20,
    type: "email",
  },
  {
    name: "Password",
    id: "loginPassword",
    isRequired: "Please enter a password",
    minLength: 8,
    maxLength: 20,
    type: "password",
  },
];
export const registerFields = [
  {
    name: "Email",
    id: "registerEmail",
    isRequired: "Please enter an email",
    minLength: 8,
    maxLength: 20,
    type: "email",
  },
  {
    name: "Password",
    id: "registerPassword",
    isRequired: "Please enter a password",
    minLength: 8,
    maxLength: 20,
    type: "password",
  },
  {
    name: "Confirm password",
    id: "confirmPassword",
    isRequired: "Please confirm your password",
    minLength: 8,
    maxLength: 20,
    type: "password",
  },
];
