import React, { useContext } from 'react'
import User from './User'
import { StateContext } from '../Contexts'

export default function UserList () {

      const {state} = useContext(StateContext)
      const {users} = state
     return (
      <div>
          {users.map((t, i) => <User  id={t.id} username={t.username} key={'user-' + i} />)}
      </div> 
      )
}