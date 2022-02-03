import BaseComponent from '../baseComponent/BaseComponent';

export default class BtnFormToys extends BaseComponent<HTMLButtonElement> {
  constructor() {
    super('button', ['forms-toys_btn']);
  }

  active(): void {
    this.element.classList.toggle('active-form-toys');
  }

  makeInactive() {
    this.element.classList.remove('active-form-toys');
  }
}
