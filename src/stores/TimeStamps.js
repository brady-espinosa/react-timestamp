import {EventEmitter} from 'events'
import Dispatcher from '../dispatchers/dispatcher'

class TimeStamps extends EventEmitter {
  constructor(){
    super()
    this.timeStamps = [
      1495146209042,
      1495146266023
    ]
  }
  getAllTimeStamps() {
    return this.timeStamps
  }
  handleAction(action){
    switch(action.type){
      case("CREATE_TIMESTAMP"):{
        this.addTimeStamp(action.time)
      }
      default:{}
    }
  }
  addTimeStamp(time){
    this.timeStamps.push(time)
    this.emit('change')
  }
}

const timeStamps = new TimeStamps()
Dispatcher.register(timeStamps.handleAction.bind(timeStamps))
window.dispatcher = Dispatcher
export default timeStamps
