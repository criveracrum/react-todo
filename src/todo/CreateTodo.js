import React from 'react'
import Todo from './Todo'

export default function CreateTodo ({user}) {

    const description = ''
    const title = ''

    function handleTodoSubmit(evt){
        
        if (title){
            alert('Title required')
        } else {
            const today = new Date(Date.now())
            const newTodo = new Todo(this.title, this.description, today.toDateString())
            alert('Todo was submitted' + newTodo)
        }
    }
    function onDescriptionChange(evt){
        this.description = evt.target.value;
    }
    function onTitleChange(evt){
        this.title = evt.target.value;
    }

     return (
          <form onSubmit={e => e.preventDefault()}>  
             <div>
                 <label htmlFor="create-title">Title:</label>
                 <input type="text" name="create-title" id="create-title" onChange="onTitleChange" required/>
             </div>
             <div>
                 <label htmlFor="create-description">Description:</label>
                 <br />
                 <textarea onChange="onDescriptionChange"/>
             </div>
             <input type="submit" value="Create" />
         </form>   
          )
 }
 