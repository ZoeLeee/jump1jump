import gameControl from './controller.js';

class Game{
  constructor(){
    this._control = gameControl;

  }
  init(){
    this._control.initPages();
  }
}

export default new Game();