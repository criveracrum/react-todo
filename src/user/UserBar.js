import React, {useContext, useState} from 'react'

import Register from './Register'
import Login from './Login'
import { StateContext } from '../Contexts'
import {Button} from 'react-bootstrap'

export default function UserBar() {

  const Logout = React.lazy(() => import('./Logout'))
  const {state} = useContext(StateContext)
  const{user} = state

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  
  if (user.username) {
      return <Logout/>
  } else {
      return (
          <>
            <div className="justify-content-end">
                <Button variant="primary" onClick={(e) => setShowLogin(true)}>
                    Login
                </Button>
                <Login show={showLogin} handleClose={() => setShowLogin(false)} />
                <Button variant="primary" onClick={(e) => setShowRegister(true)}>
                    Register
                </Button>
                <Register show={showRegister} handleClose={() => setShowRegister(false)} />
            </div>
          </>
      )
  }
}
