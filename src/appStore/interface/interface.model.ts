export interface Card {
  el: string;
  id: string;
  maxChar: number;
  name: string;
}
export interface Template {
  id: string;
  isReorderable: boolean;
  comps: Card[];
}
export interface Inpt {
  id: string;
  value: string;
}
export interface LoginField {
  name: string;
  id: string;
  isRequired: string;
  minLength: number;
  maxLength: number;
  type: string;
}
