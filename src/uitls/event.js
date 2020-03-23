export default class Event{
  constructor(_sender){
    this._sender=_sender;
    this._listeners=[];
  }
  attach(callback){
    this._listeners.push(callback);
  }
  notify(args){
    for(let callback of this._listeners){
      callback(this._sender,args);
    }
  }
}