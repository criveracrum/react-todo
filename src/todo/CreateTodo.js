import React, {useState} from 'react'
import Todo from './Todo'

export default function CreateTodo ({user, dispatch}) {

    const [dateString, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [ title, setTitle ] = useState('')


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
        setDescription(evt.target.value);

    }
    function onTitleChange(evt){
        setTitle(evt.target.value);
        const today = new Date(Date.now());
        setDate(today.toDateString());
    }

     return (
          <form onSubmit={e => {e.preventDefault(); dispatch({type: "CREATE_TODO", title, description, dateString});}}>  
             <div>
                 <h4>Creator: {user}</h4>
                 <label htmlFor="create-title">Title:</label>
                 <input type="text" name="create-title" id="create-title" onChange={onTitleChange} required/>
             </div>
             <div>
                 <label htmlFor="create-description">Description:</label>
                 <br />
                 <textarea onChange={onDescriptionChange}/>
             </div>
             <input type="submit" value="Create" />
         </form>   
          )
 }
 