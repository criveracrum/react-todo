import React, {useContext} from 'react'
import { Navbar } from 'react-bootstrap'

import { Link } from 'react-navi'

const Header = ({user}) => {     
    
    return <Link href="/"><Navbar.Brand >Todo Page</Navbar.Brand></Link>
}

export default Header 
