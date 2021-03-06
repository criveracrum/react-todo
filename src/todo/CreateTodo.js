import React, {useState, useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts'

import { useNavigation } from 'react-navi'

export default function CreateTodo () {

    const [dateCreated, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [ title, setTitle ] = useState('')

    const {state, dispatch} = useContext(StateContext)
    const {user} = state

    const navigation = useNavigation()


    const [todo , createTodo ] = useResource(({ title, description, dateCreated, complete, dateCompleted, creator }) => ({
                url: '/todo',
                method: 'post',
                headers: {"Authorization": `${state.user.access_token}`},
                data: { title, description, dateCreated, complete, dateCompleted, creator }
            }))


    function handleCreate () {
        createTodo({ title, description, dateCreated, complete: false, dateCompleted: null, creator: user})

    }
    // useEffect(() => {
    //     if (todo && todo.data) {
    //         dispatch({ type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description, dateCreated: todo.data.dateCreated, id: todo.data.id, creator: user })
    //     }
    // }, [todo])
    useEffect(() => {
                if (todo && todo.data) {
                    dispatch({ type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description, dateCreated: todo.data.dateCreated, id: todo.data.id, creator: todo.data.creator })
                    navigation.navigate(`/todos/${todo.data.id}`)
                }
            }, [todo])


    function onDescriptionChange(evt){
        setDescription(evt.target.value);

    }
    function onTitleChange(evt){
        setTitle(evt.target.value);
        const today = new Date(Date.now());
        setDate(today.toDateString());
    }

     return (
          <form onSubmit={e => {e.preventDefault(); handleCreate();}}>  
             <div>
                 <h4>Creator: {user.username}</h4>
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
 