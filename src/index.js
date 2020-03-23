import '../libs/weapp-adapter.js';
import * as THREE from 'three';
window["THREE"] = THREE;
import game from './game/game.js';

export class Game {
  constructor() {
  }
  Init() {
    game.init();

  }
}
