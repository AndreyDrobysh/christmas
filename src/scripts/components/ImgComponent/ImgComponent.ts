import BaseComponent from '../baseComponent/BaseComponent';

export default class ImageComponent extends BaseComponent<HTMLImageElement> {
  constructor(url: string, alt = '', classes: string [] = [], text?: string) {
    super('img');
    if (text) {
      this.element.innerHTML = text;
    }
    this.element.src = url;
    this.element.classList.add(...classes);
    this.element.alt = alt;
  }
}
