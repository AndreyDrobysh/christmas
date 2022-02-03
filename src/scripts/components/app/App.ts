import BaseComponent from '../baseComponent/BaseComponent';
import Footer from '../footer/Footer';
import Greetings from '../greetings/Greetings';
import Header from '../header/Header';
import Main from '../main/Main';
import Tree from '../tree/Tree';

export default class App extends BaseComponent {
  private header?: Header;

  private footer?: Footer;

  private main?: Main;

  private greetings?: Greetings;

  private tree?: Tree;

  constructor() {
    super('div', ['wrap-site']);
  }

  start(): void {
    const header = new Header();
    this.addChild(header);
    this.header = header;
    this.header.onToys(() => {
      this.clearChildren();
      this.toys();
    });
    this.header.onTrees(() => {
      this.clearChildren();
      this.trees();
    });

    const greetings = new Greetings();
    this.addChild(greetings);
    greetings.startGame(() => {
      this.clearChildren();
      this.toys();
    });
    this.greetings = greetings;

    const footer = new Footer();
    this.addChild(footer);
    this.footer = footer;
  }

  toys():void {
    const header = new Header();
    this.addChild(header);
    this.header = header;
    this.header.onStartMenu(() => {
      this.clearChildren();
      this.start();
    });
    this.header.onTrees(() => {
      this.clearChildren();
      this.trees();
    });
    this.header.activeToys();

    const main = new Main();
    this.addChild(main);
    this.main = main;

    const footer = new Footer();
    this.addChild(footer);
    this.footer = footer;
  }

  trees():void {
    const header = new Header();
    this.addChild(header);
    this.header = header;
    this.header.onStartMenu(() => {
      this.clearChildren();
      this.start();
    });
    this.header.onToys(() => {
      this.clearChildren();
      this.toys();
    });
    this.header.activeTree();

    const tree = new Tree();
    this.addChild(tree);
    this.tree = tree;

    const footer = new Footer();
    this.addChild(footer);
    this.footer = footer;
  }
}
