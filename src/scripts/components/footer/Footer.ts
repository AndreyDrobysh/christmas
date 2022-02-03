import BaseComponent from '../baseComponent/BaseComponent';
import Container from '../shared/Container';
import './footer.css';
import FooterImgRSS from './FooterImgRSS';

export default class Footer extends BaseComponent {
  container: Container;

  footerWrapp: BaseComponent<HTMLDivElement>;

  yearOfCreation: BaseComponent<HTMLParagraphElement>;

  gitHubLink: BaseComponent<HTMLLinkElement>;

  footerImgRSS: FooterImgRSS;

  imgRSSLink: BaseComponent<HTMLLinkElement>;

  constructor() {
    super('footer', ['footer']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const footerWrapp = new BaseComponent<HTMLDivElement>('div', ['footer-nav-wrapp']);
    container.addChild(footerWrapp);
    this.footerWrapp = footerWrapp;

    const yearOfCreation = new BaseComponent<HTMLParagraphElement>('p', ['year-of-creation', 'footer-text'], '2021');
    footerWrapp.addChild(yearOfCreation);
    this.yearOfCreation = yearOfCreation;

    const gitHubLink = new BaseComponent<HTMLLinkElement>('a', ['github-link', 'footer-text'], 'Andrey Drobysh');
    footerWrapp.addChild(gitHubLink);
    this.gitHubLink = gitHubLink;

    const imgRSSLink = new BaseComponent<HTMLLinkElement>('a', ['rss-link']);
    footerWrapp.addChild(imgRSSLink);
    this.imgRSSLink = imgRSSLink;

    const footerImgRSS = new FooterImgRSS('./svg/rs_school_js.svg');
    imgRSSLink.addChild(footerImgRSS);
    this.footerImgRSS = footerImgRSS;
  }
}
