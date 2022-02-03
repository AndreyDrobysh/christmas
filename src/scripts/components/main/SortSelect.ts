import BaseComponent from '../baseComponent/BaseComponent';

export default class SortSelect extends BaseComponent<HTMLButtonElement> {
  constructor(name: string) {
    super('select', [''])
    this.element.name = name;
  }
}
