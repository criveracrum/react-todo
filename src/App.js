import {useState, useReducer, useEffect} from 'react';

import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";
import appReducer from './Reducers';
import { StateContext } from './Contexts';

function App() {
  const date = new Date(Date.now())
  const initialTodos = [
    {
      title: "Dishes",
      description: "Please wash the dishes. They are filthy.",
      dateCreated: date.toDateString()
    },
    {
      title: "Homework",
      description: "Do you homework for CSC436",
      dateCreated: date.toDateString()
    },
    {
      title: "Workout",
      description: "You know its good for your health.",
      dateCreated: date.toDateString()
    },
    {
      title: "Prep for Winter",
      description: "",
      dateCreated: date.toDateString()
    }
  ]

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: initialTodos})


  const {user} = state;



  useEffect(() => {
    if (user) {
       document.title = `${user}’s Blog` 
     } else {
       document.title = 'Blog'
   }
  }, [user])

  return (<div>
          <StateContext.Provider value={{state: state, dispatch: dispatch}}> 
            <UserBar/>
            <br/><br/><hr/><br/>
            {user && <CreateTodo/>}
            <TodoList/>
          </StateContext.Provider>
        </div>
  )
}

export default App;
