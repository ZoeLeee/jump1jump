import gameModel from './model.js';
import gameView from './view.js';

class GameController {
  constructor() {
    this.gameView = gameView;
    this.gameModel = gameModel;
    this.gameModel.event.attach(
      (s,arg)=>{
        if(arg==="start"){
          this.gameView.showGamePage();
        }
        else{
          this.gameView.showGamePage();
        }
      }
    )

  }
  initPages() {
    const gamePageCallbacks = {
      showGameOverPage: ()=>this.gameModel.Stage="start"
    }

    const gameOverPageCallbacks={
      gameRestart: ()=>this.gameModel.Stage="over"
    }

    // this.gameView.initGamePage(gamePageCallbacks);
    this.gameView.initGameOverPage(gameOverPageCallbacks);
  }
}

export default new GameController();