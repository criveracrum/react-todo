import React, { useEffect, useContext } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from '../Contexts'

import { Link } from 'react-navi'
import User from '../user/User'
import TodoList from '../todo/TodoList'
import Todo from '../todo/Todo'


export default function UserPage ({ id }) {

    const { state, dispatch } = useContext(StateContext)
    
    const [ user, getUser ] = useResource(() => ({
        url: `/auth/users/${id}`,
        method: 'get'
    }))
   
    
    useEffect(getUser, [id])
    
   

    return (
        <div>
            {(user && user.data && user.isLoading === false)
                ? <User {...user.data} /> 
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}