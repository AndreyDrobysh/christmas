import BaseComponent from '../baseComponent/BaseComponent';
import ImageComponent from '../ImgComponent/ImgComponent';
import Container from '../shared/Container';
import './main.css';
import BtnColor from './BtnColor';
import BtnFormToys from './BtnFormToys';
import BtnSize from './BtnSize';
import { IInfoToy } from '../types/interface';
import BtnResetFilter from './BtnResetFilter';
import infoToysUrl from '../../../../public/data.json';
import BtnToy from './BtnToy';
import BtnFavoriteToys from './BtnFavoriteToys';

const infoToys = infoToysUrl as IInfoToy[];

const TOYS_SHAPES = [
  {
    url: './svg/bell.svg',
    name: 'Колокол',
    shape: 'колокольчик',
  },
  {
    url: './svg/ball.svg',
    name: 'Шар',
    shape: 'шар',
  },
  {
    url: './svg/cone.svg',
    name: 'Шишка',
    shape: 'шишка',
  },
  {
    url: './svg/snowflake.svg',
    name: 'Снежинка',
    shape: 'снежинка',
  },
  {
    url: './svg/toy.svg',
    name: 'Фигурка',
    shape: 'фигурка',
  },
];

const TOYS_COLOR = [
  {
    colorEn: 'white',
    colorRu: 'белый',
  },
  {
    colorEn: 'yellow',
    colorRu: 'желтый',
  },
  {
    colorEn: 'red',
    colorRu: 'красный',
  },
  {
    colorEn: 'blue',
    colorRu: 'синий',
  },
  {
    colorEn: 'green',
    colorRu: 'зелёный',
  },
];

const TOYS_SIZE = ['большой', 'средний', 'малый'];

export default class Main extends BaseComponent {
  container: BaseComponent;

  mainWrap: BaseComponent<HTMLDivElement>;

  mainOptions: BaseComponent<HTMLDivElement>;

  mainSearch: BaseComponent<HTMLDivElement>;

  mainToys?: BaseComponent<HTMLDivElement>;

  sortingWrap: BaseComponent<HTMLDivElement>;

  sortingText: BaseComponent<HTMLParagraphElement>;

  categoryWrap: BaseComponent<HTMLDivElement>;

  categoryHeader: BaseComponent<HTMLParagraphElement>;

  categoryWrapBtn: BaseComponent<HTMLDivElement>;

  favoriteToysBtn: BtnFavoriteToys;

  favoriteToysNameBtn: BaseComponent<HTMLParagraphElement>;

  numberFavoriteToys: BaseComponent<HTMLDivElement>;

  forms: BaseComponent<HTMLParagraphElement>;

  formsWrap: BaseComponent<HTMLDivElement>;

  formToyWrap?: BaseComponent<HTMLDivElement>;

  formsNameToy?: BaseComponent<HTMLParagraphElement>;

  formsBtnWrap: BaseComponent<HTMLDivElement>;

  rangeFilterWrap: BaseComponent<HTMLDivElement>;

  numberOfCopiesWrap: BaseComponent<HTMLDivElement>;

  byeYearWrap: BaseComponent<HTMLDivElement>;

  numberOfCopiesHeader: BaseComponent<HTMLParagraphElement>;

  byeYearHeader: BaseComponent<HTMLParagraphElement>;

  colorSectionWrap: BaseComponent<HTMLDivElement>;

  colorHeader: BaseComponent<HTMLParagraphElement>;

  colorsWrap: BaseComponent<HTMLDivElement>;

  btnToy?: BaseComponent<HTMLButtonElement>;

  nameToy?:BaseComponent<HTMLParagraphElement>;

  mainToyImg?: BaseComponent<HTMLImageElement>;

  imgToy?: ImageComponent;

  numbersToys?: BaseComponent<HTMLParagraphElement>;

  yearBye?: BaseComponent<HTMLParagraphElement>;

  formToy?: BaseComponent<HTMLParagraphElement>;

  colorToy?: BaseComponent<HTMLParagraphElement>;

  sizeToy?: BaseComponent<HTMLParagraphElement>;

  favoriteToy?: BaseComponent<HTMLParagraphElement>;

  toyWrapImg?: BaseComponent<HTMLDivElement>;

  sizeWrap: BaseComponent<HTMLDivElement>;

  sizeHeader: BaseComponent<HTMLParagraphElement>;

  nameSizeBtn?: BaseComponent<HTMLParagraphElement>;

  sizeBtnWrap: BaseComponent<HTMLDivElement>;

  btnResetFilter: BaseComponent<HTMLButtonElement>;

  activeColors: string [] = [];

  activeShape: string [] = [];

  activeSize: string [] = [];

  favoritesToys: string [] = [];

  toysSizeBtns: BtnSize[] = [];

  toysColorBtns: BtnColor[] = [];

  toysShapeBtns: BtnFormToys[] = [];

  favoriteOnly = false;

  constructor() {
    super('main', ['main']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const mainWrap = new BaseComponent<HTMLDivElement>('div', ['main-wrap']);
    container.addChild(mainWrap);
    this.mainWrap = mainWrap;

    const mainOptions = new BaseComponent<HTMLDivElement>('div', ['main-options']);
    mainWrap.addChild(mainOptions);
    this.mainOptions = mainOptions;

    const mainToys = new BaseComponent<HTMLDivElement>('div', ['main-toys']);
    this.mainWrap.addChild(mainToys);
    this.mainToys = mainToys;
    this.showToys();

    const mainSearch = new BaseComponent<HTMLDivElement>('div', ['search-wrap'], 'Поиск');
    mainOptions.addChild(mainSearch);
    this.mainSearch = mainSearch;

    const sortingWrap = new BaseComponent<HTMLDivElement>('div', ['sorting-wrap']);
    mainOptions.addChild(sortingWrap);
    this.sortingWrap = sortingWrap;

    const sortingText = new BaseComponent<HTMLParagraphElement>('p', ['sorting-text'], 'Сортировка');
    sortingWrap.addChild(sortingText);
    this.sortingText = sortingText;

    const categoryWrap = new BaseComponent<HTMLDivElement>('div', ['category-wrap']);
    mainOptions.addChild(categoryWrap);
    this.categoryWrap = categoryWrap;

    const categoryHeader = new BaseComponent<HTMLParagraphElement>('p', ['category-header'], 'Категории');
    categoryWrap.addChild(categoryHeader);
    this.categoryHeader = categoryHeader;

    const categoryWrapBtn = new BaseComponent<HTMLDivElement>('div', ['category-wrap-btn']);
    categoryWrap.addChild(categoryWrapBtn);
    this.categoryWrapBtn = categoryWrapBtn;

    const favoriteToysBtn = new BtnFavoriteToys();
    categoryWrapBtn.addChild(favoriteToysBtn);
    favoriteToysBtn.onClick(():void => {
      console.log(21);
      this.favoriteOnly = !this.favoriteOnly;
      favoriteToysBtn.active();
      mainToys.clearChildren();
      this.showToys();
    });
    this.favoriteToysBtn = favoriteToysBtn;

    const favoriteToysNameBtn = new BaseComponent<HTMLParagraphElement>('p', ['all-toys-btn-name'], 'Только избранные');
    categoryWrapBtn.addChild(favoriteToysNameBtn);
    this.favoriteToysNameBtn = favoriteToysNameBtn;

    const numberFavoriteToys = new BaseComponent<HTMLDivElement>('div', ['number-favorite-toys'], '0');
    categoryWrapBtn.addChild(numberFavoriteToys);
    this.numberFavoriteToys = numberFavoriteToys;

    const formsWrap = new BaseComponent<HTMLDivElement>('div', ['forms-wrap']);
    mainOptions.addChild(formsWrap);
    this.formsWrap = formsWrap;

    const forms = new BaseComponent<HTMLParagraphElement>('p', ['forms-text'], 'Формы');
    formsWrap.addChild(forms);
    this.forms = forms;

    const formsBtnWrap = new BaseComponent<HTMLDivElement>('div', ['forms-wrap_btn']);
    formsWrap.addChild(formsBtnWrap);
    this.formsBtnWrap = formsBtnWrap;

    this.toysShapeBtns = TOYS_SHAPES.map((item) => {
      const formToyWrap = new BaseComponent<HTMLDivElement>('div', ['forms-toy-wrap']);
      formsBtnWrap.addChild(formToyWrap);
      this.formToyWrap = formToyWrap;

      const btnFormToys = new BtnFormToys();
      formToyWrap.addChild(btnFormToys);
      btnFormToys.onClick(() => {
        if (!this.activeShape.includes(item.shape)) {
          this.activeShape.push(item.shape);
        } else {
          this.activeShape.splice(this.activeShape.indexOf(item.shape), 1);
        }
        btnFormToys.active();
        mainToys.clearChildren();
        this.showToys();
      });
      btnFormToys.element.style.backgroundImage = `url(${item.url})`;

      const formsNameToy = new BaseComponent<HTMLParagraphElement>('p', ['forms-name-toy']);
      formToyWrap.addChild(formsNameToy);
      this.formsNameToy = formsNameToy;
      formsNameToy.element.innerHTML = item.name;

      return btnFormToys;
    });

    const rangeFilterWrap = new BaseComponent<HTMLDivElement>('div', ['range-filter-wrap']);
    mainOptions.addChild(rangeFilterWrap);
    this.rangeFilterWrap = rangeFilterWrap;

    const numberOfCopiesWrap = new BaseComponent<HTMLDivElement>('div', ['number-copies-wrap']);
    rangeFilterWrap.addChild(numberOfCopiesWrap);
    this.numberOfCopiesWrap = numberOfCopiesWrap;

    const numberOfCopiesHeader = new BaseComponent<HTMLParagraphElement>('p', ['number-copies-header'], 'Количество экземпляров');
    numberOfCopiesWrap.addChild(numberOfCopiesHeader);
    this.numberOfCopiesHeader = numberOfCopiesHeader;

    const byeYearWrap = new BaseComponent<HTMLDivElement>('div', ['range-filter-wrap']);
    rangeFilterWrap.addChild(byeYearWrap);
    this.byeYearWrap = byeYearWrap;

    const byeYearHeader = new BaseComponent<HTMLParagraphElement>('p', ['bye-year-header'], 'Год приобретения');
    byeYearWrap.addChild(byeYearHeader);
    this.byeYearHeader = byeYearHeader;

    const colorSectionWrap = new BaseComponent<HTMLDivElement>('div', ['color-section-wrap']);
    mainOptions.addChild(colorSectionWrap);
    this.colorSectionWrap = colorSectionWrap;

    const colorHeader = new BaseComponent<HTMLParagraphElement>('p', ['color-header'], 'Цвет');
    colorSectionWrap.addChild(colorHeader);
    this.colorHeader = colorHeader;

    const colorsWrap = new BaseComponent<HTMLDivElement>('div', ['color-wrap']);
    colorSectionWrap.addChild(colorsWrap);
    this.colorsWrap = colorsWrap;

    this.toysColorBtns = TOYS_COLOR.map((item) => {
      const btnColor = new BtnColor();
      colorsWrap.addChild(btnColor);
      btnColor.onClick(() => {
        if (!this.activeColors.includes(item.colorRu)) {
          this.activeColors.push(item.colorRu);
        } else {
          this.activeColors.splice(this.activeColors.indexOf(item.colorRu), 1);
        }
        btnColor.active(item.colorEn);
        mainToys.clearChildren();
        this.showToys();
      });
      btnColor.element.style.backgroundColor = item.colorEn;
      return btnColor;
    });

    const sizeWrap = new BaseComponent<HTMLDivElement>('div', ['size-wrap']);
    mainOptions.addChild(sizeWrap);
    this.sizeWrap = sizeWrap;

    const sizeHeader = new BaseComponent<HTMLParagraphElement>('p', ['color-header'], 'Размер');
    sizeWrap.addChild(sizeHeader);
    this.sizeHeader = sizeHeader;

    const sizeBtnWrap = new BaseComponent<HTMLDivElement>('div', ['size-wrap-btn']);
    sizeWrap.addChild(sizeBtnWrap);
    this.sizeBtnWrap = sizeBtnWrap;

    this.toysSizeBtns = TOYS_SIZE.map((item) => {
      const sizeBtn = new BtnSize();
      sizeBtnWrap.addChild(sizeBtn);
      sizeBtn.onClick(() => {
        if (!this.activeSize.includes(item)) {
          this.activeSize.push(item);
        } else {
          this.activeSize.splice(this.activeSize.indexOf(item), 1);
        }
        mainToys.clearChildren();
        this.showToys();
        sizeBtn.active();
      });
      const nameSizeBtn = new BaseComponent<HTMLParagraphElement>('p', ['name-size-toys'], `${item}`);
      sizeBtnWrap.addChild(nameSizeBtn);
      this.nameSizeBtn = nameSizeBtn;
      return sizeBtn;
    });

    const btnResetFilter = new BtnResetFilter();
    mainOptions.addChild(btnResetFilter);
    btnResetFilter.onClick(() => {
      this.activeColors = [];
      this.activeShape = [];
      this.activeSize = [];
      this.favoritesToys = [];
      this.numberFavoriteToys.addInnerHTML(`${this.favoritesToys.length}`);
      localStorage.clear();
      mainToys.clearChildren();
      this.toysSizeBtns.forEach((btn) => {
        btn.makeInactive();
      });
      this.toysColorBtns.forEach((btn) => {
        btn.makeInactive();
      });
      this.toysShapeBtns.forEach((btn) => {
        btn.makeInactive();
      });
      this.showToys();
    });
    this.btnResetFilter = btnResetFilter;
  }

  showToys():void {
    const toysToShow = infoToys.filter((item) => (this.activeColors.includes(item.color) || !this.activeColors.length)
      && (this.activeShape.includes(item.shape) || !this.activeShape.length)
      && (this.activeSize.includes(item.size) || !this.activeSize.length)
      && (!this.favoriteOnly || this.favoritesToys.includes(item.num)));

    toysToShow.forEach((toy) => {
      const btnToy = new BtnToy();
      this.mainToys?.addChild(btnToy);
      btnToy.onClick(() => {
        if (!this.favoritesToys.includes(toy.num)) {
          this.favoritesToys.push(toy.num);
          btnToy.makeActive();
        } else {
          this.favoritesToys = this.favoritesToys.filter((favoriteToyNum) => favoriteToyNum !== toy.num);
          btnToy.makeInactive();
        }
        localStorage.setItem('favoriteToys', JSON.stringify(this.favoritesToys));

        const favoritesToysLength = JSON.parse(`${localStorage.getItem('favoriteToys')}`).length;

        this.numberFavoriteToys.addInnerHTML(`${favoritesToysLength}`);
        this.showToys();
      });

      this.btnToy = btnToy;

      if (this.favoritesToys.includes(toy.num)) {
        btnToy.makeActive();
      }

      const nameToy = new BaseComponent<HTMLParagraphElement>('p', ['name-header-toys'], `${toy.name}`);
      btnToy.addChild(nameToy);
      this.nameToy = nameToy;

      const toyWrapImg = new BaseComponent<HTMLDivElement>('div', ['toy-wrap_img']);
      btnToy.addChild(toyWrapImg);
      this.toyWrapImg = toyWrapImg;

      const imgToy = new ImageComponent(`./toys/${[toy.num]}.png`, 'picture Toy', ['img-toy']);
      toyWrapImg.addChild(imgToy);
      this.imgToy = imgToy;

      const numbersToys = new BaseComponent<HTMLParagraphElement>('p', ['numbers-toys'], `Количество: ${toy.count}`);
      btnToy.addChild(numbersToys);
      this.numbersToys = numbersToys;

      const yearBye = new BaseComponent<HTMLParagraphElement>('p', ['year-toys'], `Год покупки: ${toy.year}`);
      btnToy.addChild(yearBye);
      this.yearBye = yearBye;

      const formToy = new BaseComponent<HTMLParagraphElement>('p', ['form-toys'], `Форма: ${toy.shape}`);
      btnToy.addChild(formToy);
      this.formToy = formToy;

      const colorToy = new BaseComponent<HTMLParagraphElement>('p', ['color-toys'], `Цвет: ${toy.color}`);
      btnToy.addChild(colorToy);
      this.colorToy = colorToy;

      const sizeToy = new BaseComponent<HTMLParagraphElement>('p', ['size-toys'], `Размер: ${toy.size}`);
      btnToy.addChild(sizeToy);
      this.sizeToy = sizeToy;

      let flagFavorite: string;

      if (toy.favorite) {
        flagFavorite = 'да';
      } else {
        flagFavorite = 'нет';
      }

      const favoriteToy = new BaseComponent<HTMLParagraphElement>('p', ['favorite-toys'], `Любимая: ${flagFavorite}`);
      btnToy.addChild(favoriteToy);
      this.favoriteToy = favoriteToy;
    });
  }
}
