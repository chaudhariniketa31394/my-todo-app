
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import { useState } from 'react';

function App() {
  // let initTodo;
  // if (localStorage.getItem('todos')) {
  //   initTodo = []
  // } else {
  //   initTodo = JSON.parse(localStorage.getItem("todos"))
  // }
  const onDelete = (todo) => {
    console.log("I am on Delete", todo)


    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    // localStorage.setItem('todos', JSON.stringify(todos))

  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) sno = 0;
    else sno = todos[todos.length - 1].sno + 1;



    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log("myTodo", myTodo)
    setTodos([...todos, myTodo])


    //localStorage.setItem('todos', JSON.stringify(todos))

    //todos.push[myTodo]
  }

  const [todos, setTodos] = useState([
    //initTodo
  ])
  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
