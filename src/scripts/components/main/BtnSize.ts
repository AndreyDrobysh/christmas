import BaseComponent from '../baseComponent/BaseComponent';

export default class BtnSize extends BaseComponent<HTMLButtonElement> {
  constructor() {
    super('button', ['size_btn']);
  }

  active(): void {
    this.element.classList.toggle('active-size');
  }

  makeInactive() {
    this.element.classList.remove('active-size');
  }
}
