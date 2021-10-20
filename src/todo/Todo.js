import React, {useContext, useState} from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts';

export default function Todo ({ title, description, dateCreated, complete, dateCompleted, id, index}) { 
    
     const {dispatch} = useContext(StateContext);

     const [ todo, deleteTodo ] = useResource(() => ({
          url: `/todos/${id}`,
          method: 'delete'
        }))

     const [todo2 , updateTodo ] = useResource(({ title, description, dateCreated, complete, dateCompleted}) => ({
          url: `/todos/${id}`,
          method: 'put',
          data: { title, description, dateCreated, complete, dateCompleted}
      }))
     
     function handleDelete() {
          dispatch({type: "DELETE_TODO", id})
          deleteTodo()
     }

     function handleUpdate(){
          const now = new Date(Date.now());
          updateTodo({ title, description, dateCreated, complete: true, dateCompleted: now.toDateString()})
          dispatch({type: "TOGGLE_TODO", id})
     }

     

      
     
     if (complete) {
          return (
               <div>
          <h3>{index+1}. {title}</h3>
          
          <div>{description}</div>
          
          <br />
          <i>Date Created:<b>{dateCreated}</b></i>
          <br />
          <i>Date Completed:<b>{dateCompleted}</b></i>
          <br />
          <button onClick={e => { handleDelete(); }} >DELETE </button>
          
      </div>
          )
     } else {
          return (
               <div>
                  <h3>{index+1}. {title}</h3>
                  <div>{description}</div>
                  <br />
                  <i>Date Created:<b>{dateCreated}</b></i>
                  <br />
                  <input type="checkbox" id="completeCheck" onChange={e => { handleUpdate();} }/>
                  <label htmlFor="completeCheck"> Task Completed? </label><br></br>
                  <br />
                  <button onClick={e => {handleDelete();} } >DELETE </button>
              </div> 
         )
     }
}
