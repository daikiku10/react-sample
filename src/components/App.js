import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import { countPlus, countMinus, addTask, removeTask} from '../actions'
import { Box, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const App = (props) => {
  const [task, setTask] = useState('')
  const createTask = (e) => {
    setTask(e.target.value)
  }
  return (
    <>
      <div>
        <h1 className="bg-primary text-white display-4">Todoリスト</h1>
        <div className="container text-center">
          <TextField className="mb-3"label="タスク" autoComplete="current-password" variant="outlined" value={task} onChange={createTask}></TextField>
          <Button variant="contained" onClick={() => {
            props.addTask(task)
            setTask('')
            }}>追加</Button>
          <ul className="list-group">
            {props.todos.map((todo, index) => {
              return (<li className=" list-group-item mb-3" key={index}>{todo.title}<Button variant="contained" color="primary" onClick={() => {props.removeTask(index)}}>削除</Button></li>)
            })}
          </ul>
        </div>
      </div>
    </>
 )
}

const mapStateToProps = state => ({
  val: state.counter.val,
  todos: state.task.todos,
})
const mapDispatchToProps = (dispatch) => ({
  countPlus:()=>dispatch(countPlus()),
  countMinus:()=>dispatch(countMinus()),
  addTask:(task)=>dispatch(addTask(task)),
  removeTask:(index)=>{dispatch(removeTask(index))},
})
export default connect (mapStateToProps,mapDispatchToProps)(App)
