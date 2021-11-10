import React, {useState, useReducer, useEffect} from 'react';
import { useResource } from 'react-request-hook';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import appReducer from './Reducers';
import { StateContext } from './Contexts';
import CreateTodo from './todo/CreateTodo';
import { Container } from 'react-bootstrap';
import HeaderBar from './pages/HeaderBar';
import TodoPage from './pages/TodoPage';
import HomePage from './pages/HomePage.js';


function App() {
  
  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: []})

  const {user} = state;

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todos/create':route({ view: <CreateTodo /> }),
    '/todos/:id': route(req => {
        return { view: <TodoPage id={req.params.id} /> }
    }),
  })


  return (<div>
          <StateContext.Provider value={{state: state, dispatch: dispatch}}>
            <Router routes={routes}>
              <Container>
                  <HeaderBar/>
                  <hr />
                  <View />
              </Container>
              </Router>
          </StateContext.Provider>
        </div>
  )
}

export default App;
