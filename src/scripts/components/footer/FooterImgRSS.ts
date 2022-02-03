import BaseComponent from '../baseComponent/BaseComponent';

export default class FooterImgRSS extends BaseComponent<HTMLImageElement> {
  constructor(url: string) {
    super('img', ['rss_img']);
    this.element.src = url;
  }
}
