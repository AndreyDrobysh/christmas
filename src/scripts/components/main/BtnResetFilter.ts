import BaseComponent from '../baseComponent/BaseComponent';

export default class BtnResetFilter extends BaseComponent<HTMLButtonElement> {
  constructor() {
    super('button', ['reset-filter_btn'], 'сброс фильтров');
  }
}
