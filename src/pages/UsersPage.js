import React, { useEffect, useContext } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from '../Contexts'
import { Link } from 'react-navi'
import User from '../user/User'
import UserList from '../user/UserList'


export default function UsersPage () {

    const { state, dispatch } = useContext(StateContext)

    const [ users, getUsers ] = useResource(() => ({
        url: `/users`,
        method: 'get'
    }))
    
    useEffect(getUsers, [])

    useEffect(() => {
        if (users && users.data) {
            dispatch({ type: 'FETCH_USERS', users: users.data })
        }
        }, [users])

    const { data, isLoading } = users;
    return (
        <div>
            {isLoading && 'Users loading...'} <UserList />
        </div>
    )
}