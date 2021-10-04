import React from 'react'
import Todo from './Todo'

export default function TodoList ({todos=[], dispatch}) {
     return (
      <div>
       {todos.map((t, i) => <Todo {...t} index={i}  dispatch={dispatch} key={'todo-' + i} />)}
      </div> 
      )
}
    
