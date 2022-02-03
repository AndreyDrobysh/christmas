import Audio from '../AudioComponent/AudioComponent';
import BaseComponent from '../baseComponent/BaseComponent';
import Button from '../ButtonComponent/Button';
import ImageComponent from '../ImgComponent/ImgComponent';
import Container from '../shared/Container';
import './tree.css';
import { IInfoToy } from '../types/interface';
import infoToysUrl from '../../../../public/data.json';

const infoToys = infoToysUrl as IInfoToy[];

const GARLAND_COLOR_CLASS = [
  {
    class: 'multicolor_btn',
  },
  {
    class: 'red_btn',
  },
  {
    class: 'blue_btn',
  },
  {
    class: 'yellow_btn',
  },
  {
    class: 'green_btn',
  },
];

const GARLAND_COLOR_LIGHT = [
  {
    color: 'red',
    time: '1s',
  },
  {
    color: 'green',
    time: '1.3s',
  },
  {
    color: 'yellow',
    time: '1.6s',
  },
  {
    color: 'blue',
    time: '1.9s',
  },

];

const GARLAND_ROW_WIDTH = [
  {
    x: '100',
  },
  {
    x: '150',
  },
  {
    x: '200',
  },
  {
    x: '250',
  },
  {
    x: '300',
  },
  {
    x: '350',
  },
  {
    x: '400',
  },
  {
    x: '400',
  },
];

export default class Tree extends BaseComponent {
  blur: BaseComponent<HTMLDivElement>;

  container: Container;

  wrapContainer: BaseComponent<HTMLDivElement>;

  choosingTreeWrap: BaseComponent<HTMLDivElement>;

  christmasTreeWrap: BaseComponent<HTMLDivElement>;

  choosingToysWrap: BaseComponent<HTMLDivElement>;

  snowSongWrap: BaseComponent<HTMLDivElement>;

  song: BaseComponent<HTMLDivElement>;

  snow: BaseComponent<HTMLDivElement>;

  choiceTree: BaseComponent<HTMLDivElement>;

  choiceTreeHeader: BaseComponent<HTMLParagraphElement>;

  treesWrap: BaseComponent<HTMLDivElement>;

  christmasTree?: BaseComponent<HTMLDivElement>;

  mainTree: BaseComponent<HTMLDivElement>;

  backTreeWrap: BaseComponent<HTMLDivElement>;

  backTreeHeader: BaseComponent<HTMLParagraphElement>;

  backTreeAll: BaseComponent<HTMLDivElement>;

  backTree?: BaseComponent<HTMLDivElement>;

  garlandWrap: BaseComponent<HTMLDivElement>;

  garlandHeader: BaseComponent<HTMLParagraphElement>;

  allGarlands: BaseComponent<HTMLDivElement>;

  colorBtn?: Button;

  garlandBtn: Button;

  garlandNameBtn: BaseComponent<HTMLParagraphElement>;

  garlandBtnWrap: BaseComponent<HTMLDivElement>;

  audio: Audio;

  garlandTreeContainer?: BaseComponent<HTMLDivElement>;

  lightRow?: BaseComponent<HTMLDivElement>;

  light?: BaseComponent<HTMLDivElement>;

  favoriteToysContainer: BaseComponent<HTMLDivElement>;

  favoriteToysHeader:BaseComponent<HTMLParagraphElement>;

  numberFavoriteToys: BaseComponent<HTMLDivElement>;

  favoriteHeaderWrap: BaseComponent<HTMLDivElement>;

  favoriteToy?: BaseComponent<HTMLDivElement>;

  allFavoriteToys: BaseComponent<HTMLDivElement>;

  favoriteImgToy?: ImageComponent;

  numFavoriteToy?: BaseComponent<HTMLDivElement>;

  favoritesToys: string [] = [];

  event: Event | undefined;

  constructor() {
    super('main', ['tree']);

    const blur = new BaseComponent<HTMLDivElement>('div', ['blur']);
    this.addChild(blur);
    this.blur = blur;

    const container = new Container();
    blur.addChild(container);
    this.container = container;

    const wrapContainer = new BaseComponent<HTMLDivElement>('div', ['wrap-container']);
    container.addChild(wrapContainer);
    this.wrapContainer = wrapContainer;

    const choosingTreeWrap = new BaseComponent<HTMLDivElement>('div', ['choosing-tree-wrap']);
    wrapContainer.addChild(choosingTreeWrap);
    this.choosingTreeWrap = choosingTreeWrap;

    const snowSongWrap = new BaseComponent<HTMLDivElement>('div', ['snow-song-wrap']);
    choosingTreeWrap.addChild(snowSongWrap);
    this.snowSongWrap = snowSongWrap;

    const audio = new Audio('./audio/audio.mp3', ['audio']);
    snowSongWrap.addChild(audio);
    this.audio = audio;

    const song = new BaseComponent<HTMLDivElement>('div', ['song']);
    snowSongWrap.addChild(song);
    song.onClick(() => {
      if (audio.element.paused) {
        song.element.style.backgroundImage = 'url(./svg/audio.svg)';
      } else {
        song.element.style.backgroundImage = 'url(./svg/mute.svg)';
      }
      audio.toggleSong();
    });
    this.song = song;

    const snow = new BaseComponent<HTMLDivElement>('div', ['snow']);
    snowSongWrap.addChild(snow);
    snow.onClick(() => {
      snow.element.classList.toggle('active-snow');
    });
    this.snow = snow;

    const choiceTree = new BaseComponent<HTMLDivElement>('div', ['choice-tree-wrap']);
    choosingTreeWrap.addChild(choiceTree);
    this.choiceTree = choiceTree;

    const choiceTreeHeader = new BaseComponent<HTMLParagraphElement>('p', ['tree-header'], 'выберите ёлку');
    choiceTree.addChild(choiceTreeHeader);
    this.choiceTreeHeader = choiceTreeHeader;

    const treesWrap = new BaseComponent<HTMLDivElement>('div', ['trees-wrap']);
    choiceTree.addChild(treesWrap);
    this.treesWrap = treesWrap;

    const christmasTreeWrap = new BaseComponent<HTMLDivElement>('div', ['christmas-tree-wrap']);
    wrapContainer.addChild(christmasTreeWrap);
    this.christmasTreeWrap = christmasTreeWrap;

    const mainTree = new BaseComponent<HTMLDivElement>('div', ['main-tree']);
    christmasTreeWrap.addChild(mainTree);
    this.mainTree = mainTree;

    for (let i = 1; i <= 6; i++) {
      const christmasTree = new BaseComponent<HTMLDivElement>('div', ['christmas-tree']);
      treesWrap.addChild(christmasTree);
      christmasTree.onClick(() => {
        mainTree.element.style.backgroundImage = `url(./tree/${i}.png)`;
      });
      christmasTree.element.style.backgroundImage = `url(./tree/${i}.png)`;
      this.christmasTree = christmasTree;
    }

    const backTreeWrap = new BaseComponent<HTMLDivElement>('div', ['back-trees-wrap']);
    choosingTreeWrap.addChild(backTreeWrap);
    this.backTreeWrap = backTreeWrap;

    const backTreeHeader = new BaseComponent<HTMLParagraphElement>('p', ['tree-header'], 'выберите фон');
    backTreeWrap.addChild(backTreeHeader);
    this.backTreeHeader = backTreeHeader;

    const backTreeAll = new BaseComponent<HTMLDivElement>('div', ['back-tree-all']);
    backTreeWrap.addChild(backTreeAll);
    this.backTreeAll = backTreeAll;

    for (let i = 1; i <= 10; i++) {
      const backTree = new BaseComponent<HTMLDivElement>('div', ['back-tree']);
      backTreeAll.addChild(backTree);
      backTree.onClick(() => {
        christmasTreeWrap.element.style.backgroundImage = `url(./bg/${i}.jpg)`;
      });
      backTree.element.style.backgroundImage = `url(./bg/${i}.jpg)`;
      this.backTree = backTree;
    }

    const garlandWrap = new BaseComponent<HTMLDivElement>('div', ['garland-wrap']);
    choosingTreeWrap.addChild(garlandWrap);
    this.garlandWrap = garlandWrap;

    const garlandHeader = new BaseComponent<HTMLParagraphElement>('p', ['tree-header'], 'гирлянда');
    garlandWrap.addChild(garlandHeader);
    this.garlandHeader = garlandHeader;

    const allGarlands = new BaseComponent<HTMLDivElement>('div', ['garland-all']);
    garlandWrap.addChild(allGarlands);
    this.allGarlands = allGarlands;

    GARLAND_COLOR_CLASS.forEach((item) => {
      const colorBtn = new Button(['color_btn']);
      allGarlands.addChild(colorBtn);
      this.colorBtn = colorBtn;
      this.colorBtn.addClass(item.class);
    });

    const garlandBtnWrap = new BaseComponent<HTMLDivElement>('div', ['garland-btn-wrap']);
    garlandWrap.addChild(garlandBtnWrap);
    this.garlandBtnWrap = garlandBtnWrap;

    const garlandNameBtn = new BaseComponent<HTMLParagraphElement>('p', ['name-garland-btn'], 'Вкл / Выкл');
    garlandBtnWrap.addChild(garlandNameBtn);
    this.garlandNameBtn = garlandNameBtn;

    const garlandBtn = new Button(['on-off-garland_btn']);
    garlandBtnWrap.addChild(garlandBtn);
    garlandBtn.onClick(() => {
      this.onGarland();
      garlandBtn.element.classList.toggle('active-garland');
    });
    this.garlandBtn = garlandBtn;

    const choosingToysWrap = new BaseComponent<HTMLDivElement>('div', ['choosing-toys-wrap']);
    wrapContainer.addChild(choosingToysWrap);
    this.choosingToysWrap = choosingToysWrap;

    const favoriteToysContainer = new BaseComponent<HTMLDivElement>('div', ['favorite-toys-container']);
    choosingToysWrap.addChild(favoriteToysContainer);
    this.favoriteToysContainer = favoriteToysContainer;

    const favoriteHeaderWrap = new BaseComponent<HTMLDivElement>('div', ['favorite-header-wrap']);
    favoriteToysContainer.addChild(favoriteHeaderWrap);
    this.favoriteHeaderWrap = favoriteHeaderWrap;

    const favoriteToysHeader = new BaseComponent<HTMLParagraphElement>('p', ['tree-header'], 'игрушки');
    favoriteHeaderWrap.addChild(favoriteToysHeader);
    this.favoriteToysHeader = favoriteToysHeader;

    this.favoritesToys = JSON.parse(`${localStorage.getItem('favoriteToys')}`);

    const numberFavoriteToys = new BaseComponent<HTMLDivElement>('div', ['number-favorite-toys'], '0');
    favoriteHeaderWrap.addChild(numberFavoriteToys);

    this.numberFavoriteToys = numberFavoriteToys;

    const allFavoriteToys = new BaseComponent<HTMLDivElement>('div', ['all-favorite-toys']);
    favoriteToysContainer.addChild(allFavoriteToys);
    this.allFavoriteToys = allFavoriteToys;

    if (this.favoritesToys === null || this.favoritesToys.length <= 0) {
      for (let i = 0; i < 20; i++) {
        numberFavoriteToys.addInnerHTML('20');
        const favoriteToy = new BaseComponent<HTMLDivElement>('div', ['favorite-toy']);
        allFavoriteToys.addChild(favoriteToy);
        this.favoriteToy = favoriteToy;

        const favoriteImgToy = new ImageComponent(`./toys/${i + 1}.png`, 'picture Toy', ['favorite-img-toy']);
        favoriteToy.addChild(favoriteImgToy);
        favoriteImgToy.element.onmousedown = function drag(event) {
          const shiftX = event.clientX - favoriteImgToy.element.getBoundingClientRect().left;
          const shiftY = event.clientY - favoriteImgToy.element.getBoundingClientRect().top;

          favoriteImgToy.element.style.position = 'absolute';
          favoriteImgToy.element.style.zIndex = '1000';
          document.body.append(favoriteImgToy.element);

          function moveAt(pageX:number, pageY:number) {
            favoriteImgToy.element.style.left = `${pageX - shiftX}px`;
            favoriteImgToy.element.style.top = `${pageY - shiftY}px`;
          }

          moveAt(event.pageX, event.pageY);

          function onMouseMove(mouseMoveEven: MouseEvent) {
            moveAt(mouseMoveEven.pageX, mouseMoveEven.pageY);
          }

          document.addEventListener('mousemove', onMouseMove);

          favoriteImgToy.element.onmouseup = function drop() {
            document.removeEventListener('mousemove', onMouseMove);
            favoriteImgToy.element.onmouseup = null;
          };
        };

        favoriteImgToy.element.ondragstart = function start() {
          return false;
        };

        this.favoriteImgToy = favoriteImgToy;

        const numFavoriteToy = new BaseComponent<HTMLDivElement>('div', ['num-favorite-toys'], `${infoToys[i].count}`);
        favoriteToy.addChild(numFavoriteToy);
        this.numFavoriteToy = numFavoriteToy;
      }
    } else {
      this.favoritesToys.forEach((item) => {
        const favoriteToy = new BaseComponent<HTMLDivElement>('div', ['favorite-toy']);
        allFavoriteToys.addChild(favoriteToy);

        this.favoriteToy = favoriteToy;

        const favoriteImgToy = new ImageComponent(`./toys/${item}.png`, 'picture Toy', ['favorite-img-toy']);
        favoriteToy.addChild(favoriteImgToy);
        this.favoriteImgToy = favoriteImgToy;
      });
    }
  }

  onGarland():void {
    const garlandTreeContainer = new BaseComponent<HTMLDivElement>('div', ['garland-tree-container']);
    this.christmasTreeWrap.addChild(garlandTreeContainer);
    this.garlandTreeContainer = garlandTreeContainer;

    for (let i = 1; i <= 8; i++) {
      const lightRow = new BaseComponent<HTMLDivElement>('div', ['light-row']);
      this.garlandTreeContainer.addChild(lightRow);
      lightRow.element.style.width = `${GARLAND_ROW_WIDTH[i - 1].x}px`;
      this.lightRow = lightRow;

      for (let j = 1; j <= (i * 5); j++) {
        if (j % 4 === 1) {
          const light = new BaseComponent<HTMLDivElement>('div', ['light']);
          this.lightRow.addChild(light);
          light.element.style.animationName = `${GARLAND_COLOR_LIGHT[j % 4].color}`;
          light.element.style.animationDuration = `${GARLAND_COLOR_LIGHT[j % 4].time}`;
          this.light = light;
        }

        if (j % 4 === 2) {
          const light = new BaseComponent<HTMLDivElement>('div', ['light']);
          this.lightRow.addChild(light);
          light.element.style.animationName = `${GARLAND_COLOR_LIGHT[j % 4].color}`;
          light.element.style.animationDuration = `${GARLAND_COLOR_LIGHT[j % 4].time}`;
          this.light = light;
        }

        if (j % 4 === 3) {
          const light = new BaseComponent<HTMLDivElement>('div', ['light']);
          this.lightRow.addChild(light);
          light.element.style.animationName = `${GARLAND_COLOR_LIGHT[j % 4].color}`;
          light.element.style.animationDuration = `${GARLAND_COLOR_LIGHT[j % 4].time}`;
          this.light = light;
        }

        if (j % 4 === 0) {
          const light = new BaseComponent<HTMLDivElement>('div', ['light']);
          this.lightRow.addChild(light);
          light.element.style.animationName = `${GARLAND_COLOR_LIGHT[j % 4].color}`;
          light.element.style.animationDuration = `${GARLAND_COLOR_LIGHT[j % 4].time}`;
          this.light = light;
        }
      }
    }
  }
}
