import BaseComponent from '../baseComponent/BaseComponent';

export default class BtnFavoriteToys extends BaseComponent<HTMLButtonElement> {
  constructor() {
    super('button', ['favorite-toys_btn']);
  }

  active(): void {
    this.element.classList.toggle('active-favorite-toys_btn');
  }
}
