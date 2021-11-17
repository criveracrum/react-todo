import React, {useContext, useState, useEffect} from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts';
import { Link } from 'react-navi'
import { Card } from 'react-bootstrap'
import TodoList from '../todo/TodoList';


export default function User ({username, id}) {
    const { state, dispatch } = useContext(StateContext)


    const [ todos, getTodos ] = useResource(() => ({
      url: '/todos',
      method: 'get'
      }))
      useEffect(getTodos, [])

      useEffect(() => {
        if (todos && todos.data) {
            dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
        }
        }, [todos])

  useEffect(() => {
    dispatch({type: 'USER_TODO', creatorID: id})
    }, [todos])



  const { data, isLoading } = todos;

    return (
        <Card>
             <Card.Body>
             <Card.Title>{username}
             </Card.Title>
             <Card.Text>
                  <div>{id}</div>
                  <Link href={`/users/${id}`}>User Page</Link>
                  <TodoList />
             </Card.Text>
             </Card.Body>
        </Card>
  )
}