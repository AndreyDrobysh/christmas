import BaseComponent from '../baseComponent/BaseComponent';

export default class Button extends BaseComponent<HTMLButtonElement> {
  constructor(classes:string [] = [], text?: string) {
    super('button');
    this.element.classList.add(...classes);
    if (text) {
      this.element.innerHTML = text;
    }
  }
}
