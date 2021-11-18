import React, { useContext } from 'react'
import User from './User'
import { StateContext } from '../Contexts'
import { Card } from 'react-bootstrap'

import { Link } from 'react-navi'

export default function UserList () {

      const {state} = useContext(StateContext)
      const {users} = state
     return (

      <div>{users.map((t, i) => <Card>
        <Card.Body>
        <Card.Title>{t.username}
        </Card.Title>
        <Card.Text>
             <div>{t.id}</div>
             <Link href={`/users/${t.id}`}>User Page</Link>
        </Card.Text>
        </Card.Body>
   </Card>
      )}</div>
      )
}