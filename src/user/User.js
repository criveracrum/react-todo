import React, {useContext, useState, useEffect} from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts';
import { Link } from 'react-navi'
import { Card } from 'react-bootstrap'
import TodoList from '../todo/TodoList';



export default function User ({username, _id}) {
    const { state, dispatch } = useContext(StateContext)
    
      const [ todos, getTodos ] = useResource(() => ({
        url: '/todo',
        method: 'get'
    }))
    useEffect(() =>{
      getTodos()
  }, [])

    useEffect(() => {
      if (todos && todos.isLoading === false && todos.data) {
          dispatch({ type: 'FETCH_TODOS', todos: todos.data.todos.reverse() })
          console.log(_id)
          }
      }, [todos])

    useEffect(() => {
      if (todos && todos.data && todos.isLoading === false) {
          dispatch({type: 'USER_TODO', creator: _id})
      }
      }, [todos])



  const { data, isLoading } = todos;

    return (
        <Card>
             <Card.Body>
             <Card.Title>{username}
             </Card.Title>
             <Card.Text>
                  <div>User ID: {_id}</div>
                  <Link href={`/users/${_id}`}>User Page</Link>
                  <TodoList />
             </Card.Text>
             </Card.Body>
        </Card>
  )
}