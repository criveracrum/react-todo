import React, {useContext, useState, useEffect} from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts';
import { Link } from 'react-navi'
import { Card } from 'react-bootstrap'
import { useNavigation } from 'react-navi'

function Todo ({ title, description, dateCreated, complete, dateCompleted, id, index}) { 
    
     const {state, dispatch} = useContext(StateContext)
     const {user} = state
     const navigation = useNavigation()

     const [ delTodo, deleteTodo ] = useResource(() => ({
          url: `/todo/${id}`,
          method: 'delete',
          headers: {"Authorization": `${user.access_token}`},
        }))

     const [upTodo , updateTodo ] = useResource(({ completed, dateComplete}) => ({
          url: `/todo/${id}`,
          method: 'patch',
          headers: {"Authorization": `${user.access_token}`},
          data: { 'complete' : completed, 'dateCompleted' : dateComplete}
      }))

      useEffect(() => {
          if (delTodo && (delTodo.data || delTodo.error) && delTodo.isLoading === false) {
               if (delTodo.error){
                    alert("Unauthorized. This is not YOUR Todo")
                    
               } else {
                    dispatch({type: "DELETE_TODO", id: delTodo.data.id})
                    navigation.navigate(`/`) 
               }
          } 
      }, [delTodo])
     
     function handleDelete() {
          deleteTodo()
          // dispatch({type: "DELETE_TODO", id: id})
     }
     useEffect(() => {
          if (upTodo && (upTodo.data || upTodo.error) && upTodo.isLoading === false) {
               if (upTodo.error){
                    alert("Unauthorized. This is not YOUR Todo")
                    
               } else {
                    dispatch({type: "TOGGLE_TODO", id: upTodo.data.id}) 
                    navigation.navigate(`/`) 
               }
          }
      }, [upTodo])

     function handleUpdate(){
          const now = new Date(Date.now());
          updateTodo({ completed: true, dateComplete: now.toDateString()})
          
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
                         <input type="checkbox" id="completeCheck" checked={complete} onChange={e => { handleUpdate();} }/>
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