import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext';
import ListItem from './ListItem';

const ListGroup = () => {
const {todos} = useContext(TodoContext);

  return (
    <ul className='list-group my-3'>
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
        
      
    </ul>
  );
};

export default ListGroup;
