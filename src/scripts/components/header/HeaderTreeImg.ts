import BaseComponent from '../baseComponent/BaseComponent';

export default class HeaderTreeImg extends BaseComponent<HTMLImageElement> {
  constructor(url: string) {
    super('img', ['tree_img']);
    this.element.src = url;
  }
}
