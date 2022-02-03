import BaseComponent from '../baseComponent/BaseComponent';

export default class SortOption extends BaseComponent<HTMLButtonElement> {
  constructor(value: string) {
    super('select', [''])
    this.element.value = value;

  }
}
