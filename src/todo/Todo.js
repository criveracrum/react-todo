import React, {useContext, useState, useEffect} from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts';
import { Link } from 'react-navi'
import { Card } from 'react-bootstrap'

function Todo ({ title, description, dateCreated, complete, dateCompleted, id, index}) { 
    
     const {dispatch} = useContext(StateContext);

     const [ delTodo, deleteTodo ] = useResource(() => ({
          url: `/todos/${id}`,
          method: 'delete'
        }))

     const [upTodo , updateTodo ] = useResource(({ complete, dateCompleted}) => ({
          url: `/todos/${id}`,
          method: 'patch',
          data: { complete, dateCompleted}
      }))
     
     function handleDelete() {
          deleteTodo()
          dispatch({type: "DELETE_TODO", id: id})
     }

     function handleUpdate(){
          const now = new Date(Date.now());
          updateTodo({ complete: true, dateCompleted: now.toDateString()})
          dispatch({type: "TOGGLE_TODO", id: id})
     }

     
     if (complete) {
          return (
               <Card>
               <Card.Body>
               <Card.Title><Link  href={`/todos/${id}`}>{index+1}. {title}</Link>
                    </Card.Title>
                         <Card.Text>
                              <div>{description}</div>
                              
                              <br />
                              <i>Date Created:<b>{dateCreated}</b></i>
                              <br />
                              <i>Date Completed:<b>{dateCompleted}</b></i>
                              <br />
                              <button onClick={e => { handleDelete(); }} >DELETE </button>
                         </Card.Text>
                    </Card.Body>
               </Card>

          )
     } else {
          return (
               <Card>
                    <Card.Body>
                    <Card.Title><Link  href={`/todos/${id}`}>{index+1}. {title}</Link>
                    </Card.Title>
                    <Card.Text>
                         <div>{description}</div>
                         <br />
                         <i>Date Created:<b>{dateCreated}</b></i>
                         <br />
                         <input type="checkbox" id="completeCheck" onChange={e => { handleUpdate();} }/>
                         <label htmlFor="completeCheck"> Task Completed? </label><br></br>
                         <br />
                         <button onClick={e => {handleDelete();} } >DELETE </button>
                    </Card.Text>
                    </Card.Body>
               </Card>
         )
     }
}

export default React.memo(Todo);