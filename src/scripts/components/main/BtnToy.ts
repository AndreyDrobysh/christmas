import BaseComponent from '../baseComponent/BaseComponent';

export default class BtnToy extends BaseComponent<HTMLButtonElement> {
  constructor() {
    super('button', ['toy-wrap']);
  }

  active(): void {
    this.element.classList.toggle('active-wrap_btn');
  }

  makeActive():void {
    this.element.classList.add('active-wrap_btn');
  }

  makeInactive():void {
    this.element.classList.remove('active-wrap_btn');
  }
}
