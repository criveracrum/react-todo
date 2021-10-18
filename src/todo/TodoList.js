import React, { useContext } from 'react'
import Todo from './Todo'
import { StateContext } from '../Contexts'

export default function TodoList () {
      
      const {state, dispatch} = useContext(StateContext)
      const {todos} = state
     return (
      <div>
       {todos.map((t, i) => <Todo {...t} index={i}  dispatch={dispatch} key={'todo-' + i} />)}
      </div> 
      )
}
    
