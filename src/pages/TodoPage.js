import React, { useEffect, useContext } from 'react'
import { useResource } from 'react-request-hook'

import { StateContext } from '../Contexts'

import { Link } from 'react-navi'

import Todo from '../todo/Todo'

export default function TodoPage ({ id }) {
    
    const {state} = useContext(StateContext);
    const {user} = state

    const [ todo, getTodo ] = useResource(() => ({
        url: `/todo/${id}`,
        headers: {"Authorization": `${user.access_token}`},
        method: 'get'
    }))
    
    useEffect(getTodo, [id])

    return (
        <div>
            {(todo && todo.data)
                ? <Todo {...todo.data} id={todo.data._id} index={0}/>
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}