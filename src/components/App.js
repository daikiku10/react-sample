import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import { countPlus, countMinus, addTask, removeTask, checkTask} from '../actions'
import { Box, Button, Checkbox } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux"

const todosSelector = state => state.task.todos

const App = (props) => {
  const [task, setTask] = useState('')
  const createTask = (e) => {
    setTask(e.target.value)
  }
  const todos = useSelector(todosSelector)
  const dispatch = useDispatch();
  console.log(todos)
  return (
    <>
      <div>
        <h1 className="bg-primary text-white display-4">Todoリスト</h1>
        <div className="container text-center">
          <TextField className="mb-3"label="タスク" autoComplete="current-password" variant="outlined" value={task} onChange={createTask}></TextField>
          <Button variant="contained" onClick={() => {
            dispatch(addTask(task))
            setTask('')
            }}>追加</Button>
          <ul className="list-group">
            {todos.map((todo, index) => {
              if(todo.flg){
                return(
                  <del key={index}>
                    <li className=" list-group-item mb-3" >
                      {todo.title}
                      <input type="checkbox" checked onChange={() => {
                        console.log(todo.flg)
                        dispatch(checkTask(todo.flg, index))}}></input>
                      <Button variant="contained" color="primary" onClick={() => {dispatch(removeTask(index))}}>削除</Button>
                    </li>
                  </del>
                )
              }else{
                return (
                  <li className=" list-group-item mb-3" key={index}>
                    {todo.title}
                    <input type="checkbox" onClick={() => {
                      console.log(todo.flg)
                      dispatch(checkTask(todo.flg, index))}}></input>
                    <Button variant="contained" color="primary" onClick={() => {dispatch(removeTask(index))}}>削除</Button>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
    </>
 )
}

// const mapStateToProps = state => ({
//   val: state.counter.val,
//   todos: state.task.todos,
// })
// const mapDispatchToProps = (dispatch) => ({
//   countPlus:()=>dispatch(countPlus()),
//   countMinus:()=>dispatch(countMinus()),
//   addTask:(task)=>dispatch(addTask(task)),
//   removeTask:(index)=>{dispatch(removeTask(index))},
// })
export default App
