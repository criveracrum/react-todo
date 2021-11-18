import React, { useEffect, useContext } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from '../Contexts'
import { Link } from 'react-navi'
import User from '../user/User'
import UserList from '../user/UserList'


export default function UsersPage () {

    const { state, dispatch } = useContext(StateContext)

    // const [ users, users ] = useResource(() => ({
    //     url: `/users`,
    //     method: 'get'
    // }))
    const [ users, getUsers ] = useResource(() => ({
                url: 'auth/users',
                method: 'get'
            }))
    
    useEffect(getUsers, [])

    useEffect(() => {
        if (users && users.isLoading === false && users.data) {
            dispatch({ type: 'FETCH_USERS', users: users.data.users })
        }
        }, [users])

    const { data, isLoading } = users;
    return (
        <div>
            {isLoading && 'Users loading...'} <UserList />
        </div>
    )
}