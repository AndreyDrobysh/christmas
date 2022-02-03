import BaseComponent from '../baseComponent/BaseComponent';
import Container from '../shared/Container';
import './header.css';
import HeaderTreeImg from './HeaderTreeImg';

export default class Header extends BaseComponent {
  container: Container;

  headerNav: BaseComponent<HTMLDivElement>;

  headerList: BaseComponent<HTMLUListElement>;

  headerListLi1: BaseComponent<HTMLLIElement>;

  headerListLi2: BaseComponent<HTMLLIElement>;

  headerListLi3: BaseComponent<HTMLLIElement>;

  headerList1Link: BaseComponent<HTMLLinkElement>;

  headerTreeImg: BaseComponent<HTMLImageElement>;

  headerList2Link: BaseComponent<HTMLLinkElement>;

  headerList3Link: BaseComponent<HTMLLinkElement>;

  constructor() {
    super('header', ['header']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const headerNav = new BaseComponent<HTMLDivElement>('div', ['nav-wrapper']);
    container.addChild(headerNav);
    this.headerNav = headerNav;

    const headerList = new BaseComponent<HTMLUListElement>('ul', ['nav-list']);
    headerNav.addChild(headerList);
    this.headerList = headerList;

    const headerListLi1 = new BaseComponent<HTMLLIElement>('li', ['nav_li']);
    headerList.addChild(headerListLi1);
    this.headerListLi1 = headerListLi1;

    const headerListLi2 = new BaseComponent<HTMLLIElement>('li', ['nav_li']);
    headerList.addChild(headerListLi2);
    this.headerListLi2 = headerListLi2;

    const headerListLi3 = new BaseComponent<HTMLLIElement>('li', ['nav_li']);
    headerList.addChild(headerListLi3);
    this.headerListLi3 = headerListLi3;

    const headerList1Link = new BaseComponent<HTMLLinkElement>('a', ['link-home']);
    headerListLi1.addChild(headerList1Link);
    this.headerList1Link = headerList1Link;

    const headerTreeImg = new HeaderTreeImg('./svg/tree.svg');
    headerList1Link.addChild(headerTreeImg);
    this.headerTreeImg = headerTreeImg;

    const headerList2Link = new BaseComponent<HTMLLinkElement>('a', ['link-toys', 'header-name-link'], 'игрушки');
    headerListLi2.addChild(headerList2Link);
    this.headerList2Link = headerList2Link;

    const headerList3Link = new BaseComponent<HTMLLinkElement>('a', ['link-tree', 'header-name-link'], 'ёлка');
    headerListLi3.addChild(headerList3Link);
    this.headerList3Link = headerList3Link;
  }

  onStartMenu(cb: (e?:Event) => void): void {
    this.headerList1Link.onClick(cb);
  }

  onToys(cb: (e?:Event) => void): void {
    this.headerList2Link.onClick(cb);
  }

  onTrees(cb: (e?:Event) => void): void {
    this.headerList3Link.onClick(cb);
  }

  activeToys():void {
    this.headerList2Link.addClass('active');
    this.headerList3Link.removeClass('active');
  }

  activeTree():void {
    this.headerList3Link.addClass('active');
    this.headerList2Link.removeClass('active');
  }
}
