import React, {useState, useReducer, useEffect} from 'react';
import { useResource } from 'react-request-hook';

import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";
import appReducer from './Reducers';
import { StateContext } from './Contexts';

function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: []})

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
        dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
}, [todos])

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
