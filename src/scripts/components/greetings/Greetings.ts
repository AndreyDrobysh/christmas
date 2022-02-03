import BaseComponent from '../baseComponent/BaseComponent';
import Button from '../ButtonComponent/Button';
import Container from '../shared/Container';
import './greetings.css';

export default class Greetings extends BaseComponent {
  container: BaseComponent;

  backGretings: BaseComponent<HTMLDivElement>;

  ballFirst: BaseComponent<HTMLDivElement>;

  ballSecond: BaseComponent<HTMLDivElement>;

  backHeader: BaseComponent<HTMLElement>;

  playGameBtn: Button;

  constructor() {
    super('main', ['greetings']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const backGretings = new BaseComponent<HTMLDivElement>('div', ['back-greetings']);
    container.addChild(backGretings);
    this.backGretings = backGretings;

    const ballFirst = new BaseComponent<HTMLDivElement>('div', ['ball', 'ball1']);
    backGretings.addChild(ballFirst);
    this.ballFirst = ballFirst;

    const ballSecond = new BaseComponent<HTMLDivElement>('div', ['ball', 'ball2']);
    backGretings.addChild(ballSecond);
    this.ballSecond = ballSecond;

    const backHeader = new BaseComponent<HTMLElement>('h1', ['back-header'], 'Новогодняя игра "Наряди ёлку"');
    container.addChild(backHeader);
    this.backHeader = backHeader;

    const playGameBtn = new Button(['paly-game_btn'], 'Начать играть');
    container.addChild(playGameBtn);
    this.playGameBtn = playGameBtn;
  }

  startGame(cb: (e?:Event) => void): void {
    this.playGameBtn.onClick(cb);
  }
}
