import React, {useContext} from 'react'
import TodoContext from '../context/TodoContext'

const Navbar = () => {
const {name} = useContext(TodoContext);

  return (
    <nav className="navbar bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 text-light">{name}</span>
  </div>
</nav>
  )
}

export default Navbar
