
import React, { useContext, useEffect } from 'react'
import { StateContext } from '../Contexts';
import UserBar from "../user/UserBar";
import TodoList from "../todo/TodoList";
import CreateTodo from "../todo/CreateTodo";
import Header from '../Header';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-navi'

export default function HeaderBar () {

    const {state} = useContext(StateContext)
    const {user} = state;

    useEffect(() => {
        if (user.username) {
           document.title = `${user.username}’s Todos` 
         } else {
           document.title = 'Todos'
       }
      }, [user])

    return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/"><Header text={user} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
               {user.username && <Nav.Link><Link href="/todos/create">Create New Todos</Link></Nav.Link>}
            </Nav>
            <React.Suspense fallback={"Loading..."}>   
              <UserBar/>
            </React.Suspense>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item ><Link href="/users">Users</Link></NavDropdown.Item>
  
          </NavDropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar>

)
}
