import Event from './../uitls/event';

class GameModel{
  constructor(){
    this._stage=null;
    this.event=new Event(this);
  }
  get Stage(){
    return this._stage;
  }
  set Stage(s){
    this._stage=s;
    this.event.notify();
  }
}

export default new GameModel();