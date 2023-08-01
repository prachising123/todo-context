// import React from 'react'
import React, {useContext,useEffect, useState} from 'react';
import TodoContext from '../context/TodoContext';

const Form = () => {
  
  const {saveTodo, edit, updateTodo} = useContext(TodoContext)

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  
    if(edit.isEdit){
      updateTodo(edit.todo.id, text);
    }else{
      saveTodo(text);
    }
    setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);


  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder='Enter Text Here....'
      className='form-control my-3'
      onChange={(e) => setText(e.target.value)}
      value={text}
      />
      <button className="btn btn-success w-100 rounded=0">Save</button>
    </form>
  )
}

export default Form;
