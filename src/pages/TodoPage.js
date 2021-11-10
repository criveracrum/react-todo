import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'

import { Link } from 'react-navi'

import Todo from '../todo/Todo'

export default function TodoPage ({ id }) {
    const [ todo, getTodo ] = useResource(() => ({
        url: `/todos/${id}`,
        method: 'get'
    }))
    
    useEffect(getTodo, [id])

    return (
        <div>
            {(todo && todo.data)
                ? <Todo {...todo.data} index={0}/>
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}