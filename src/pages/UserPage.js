import React, { useEffect, useContext } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from '../Contexts'

import { Link } from 'react-navi'
import User from '../user/User'
import TodoList from '../todo/TodoList'
import Todo from '../todo/Todo'


export default function UserPage ({ id }) {

    const { state, dispatch } = useContext(StateContext)
    const {todos} = state
    const [ user, getUser ] = useResource(() => ({
        url: `/users/${id}`,
        method: 'get'
    }))
    
    useEffect(getUser, [id])

    useEffect(() => {
        dispatch({type: 'USER_TODO', id: id})
        }, [todos])



    return (
        <div>
            {(user && user.data)
                ? <User {...user.data} /> 
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}