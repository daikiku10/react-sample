import {ADDTASK} from '../actions';
import {REMOVETASK} from '../actions'

const initialState = {
  todos:[
    {title:'概要作成', flg: false},
    {title:'画面設計作成', flg: false},
    {title:'詳細設計作成', flg: false},
    {title:'コーディング', flg: false},
    {title:'テスト', flg: false},
]}

export default(state = initialState, action) => {
  switch(action.type){
    case ADDTASK:
      if(action.task.title !== ''){
        return {todos:[...state.todos, action.task]}
      }else {
        return state
      }
    case REMOVETASK:
      let copyTodos = [...state.todos]
      copyTodos.splice(action.remove.index, 1)
      return {todos:copyTodos}
    default:
      return state
  }
}