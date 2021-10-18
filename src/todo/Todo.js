import React, {useContext, useState} from 'react'
import { StateContext } from '../Contexts';

export default function Todo ({ title, description, dateCreated, complete, dateCompleted, index}) { 
    
     const {dispatch} = useContext(StateContext);

      
     
     if (complete) {
          return (
               <div>
          <h3>{index}. {title}</h3>
          
          <div>{description}</div>
          
          <br />
          <i>Date Created:<b>{dateCreated}</b></i>
          <br />
          <i>Date Completed:<b>{dateCompleted}</b></i>
          <br />
          <button onClick={e => { dispatch({type: "DELETE_TODO", index});} } >DELETE </button>
          
      </div>
          )
     } else {
          return (
               <div>
                  <h3>{index}. {title}</h3>
                  <div>{description}</div>
                  <br />
                  <i>Date Created:<b>{dateCreated}</b></i>
                  <br />
                  <input type="checkbox" id="completeCheck" onChange={e => { dispatch({type: "TOGGLE_TODO", index});} }/>
                  <label htmlFor="completeCheck"> Task Completed? </label><br></br>
                  <br />
                  <button onClick={e => {dispatch({type: "DELETE_TODO", index});} } >DELETE </button>
              </div> 
         )
     }
}
