export default class BaseComponent<T extends HTMLElement = HTMLElement> {
  readonly element: T;

  constructor(
    tag: keyof HTMLElementTagNameMap,
    classes: string[] = [],
    text?: string,
  ) {
    this.element = document.createElement(tag) as T;
    this.element.classList.add(...classes);
    if (text) {
      this.element.innerText = text;
    }
  }

  addInnerHTML(str:string):void {
    this.element.innerHTML = str;
  }

  addClass(str:string):void {
    this.element.classList.add(str);
  }

  removeClass(str:string):void {
    this.element.classList.remove(str);
  }

  addChild(child: BaseComponent): this {
    this.element.appendChild(child.element);
    return this;
  }

  clearChildren(): void {
    this.element.innerHTML = '';
  }

  onClick(cb: (e?:Event) => void) {
    this.element.addEventListener('click', cb);
  }

  start?(): void;
}
