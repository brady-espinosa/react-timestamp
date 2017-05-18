import Dispatcher from '../dispatchers/dispatcher'

export function createTimeStamp(){
  Dispatcher.dispatch({
    type: "CREATE_TIMESTAMP",
    time: Date.now()
  })
}
