import React, {useContext, useState, useEffect} from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts';
import { Link } from 'react-navi'
import { Card } from 'react-bootstrap'

export default function User ({username, id}) {
    const { state, dispatch } = useContext(StateContext)
    const {todos} = state


    useEffect(() => {
        dispatch({type: 'USER_TODO', id: id})
        }, [todos])

    return (
        <Card>
             <Card.Body>
             <Card.Title>{username}
             </Card.Title>
             <Card.Text>
                  <div>{id}</div>
             </Card.Text>
             </Card.Body>
        </Card>
  )
}