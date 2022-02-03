import BaseComponent from '../baseComponent/BaseComponent';

export default class Audio extends BaseComponent<HTMLAudioElement> {
  constructor(url: string, classes: string [] = [], text?: string) {
    super('audio');
    this.element.src = url;
    this.element.classList.add(...classes);
    if (text) {
      this.element.innerHTML = text;
    }
  }

  toggleSong(): void {
    if (this.element.paused) {
      this.element.play();
    } else {
      this.element.pause();
    }
  }
}
