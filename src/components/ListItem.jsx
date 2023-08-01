import React from 'react'
import { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const ListItem = ({todo}) => {
 
  const {deleteTodo,editTodo} = useContext(TodoContext)

  return (
    <li className="list-group-item">
      {todo.text}
    <button className="btn btn-danger btn-sm rounded-0 float-end" onClick={() => deleteTodo(todo.id)}>Delete</button>
    <button className="btn btn-warning btn-sm rounded-0 float-end" onClick={() => editTodo(todo)}>Update</button>

    </li>
  ); 
};

export default ListItem;
