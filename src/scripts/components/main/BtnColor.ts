import BaseComponent from '../baseComponent/BaseComponent';

export default class BtnColor extends BaseComponent<HTMLButtonElement> {
  constructor() {
    super('button', ['color_btn']);
  }

  active(color: string): void {
    this.element.classList.toggle('active-color');
  }

  makeInactive() {
    this.element.classList.remove('active-color');
  }
}
