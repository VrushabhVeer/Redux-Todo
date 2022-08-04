import React, { useState } from 'react';
import '../components/Todos.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../store/todo.action';


const Todos = () => {
  const [todo, setTodo] = useState('');
  const todoList = useSelector((state) => state.todoReducer.todoList);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (

    <div className='todos'>
      <p>Enter todos here</p>
      <div className="addTodos">
        <input value={todo} onChange={(e) => handleChange(e)} type="text" className="form-control" />
        <div class="d-grid gap-2">
          <button onClick={() => dispatch(addTodo(todo), setTodo(" "))} class="btn btn-secondary" type="button"> <i class="fa-solid fa-plus"></i> Add </button>
        </div>
      </div>

      <div className='todoListDiv'>
        <p>Todos </p>
        {todoList.map((e) => {
          return (
            <div className="todoList">
              <p>{e.data}</p>
              <button onClick={() => dispatch(deleteTodo(e.id))} type="button" className="btn btn-danger">
                <i class="fa-regular fa-trash-can"></i> </button>
            </div>
          )
        })}
      </div>

      <div className='deleteAll'>
        <button onClick={() => dispatch(removeTodo())} type="button" className="btn btn-secondary">Clear All</button>
      </div>

    </div>
  )
}

export default Todos;