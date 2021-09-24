import React, {useState} from 'react'

export default function Todo ({ title, description, dateCreated}) { 
     const [complete, setComplete] = useState(false)
     const [dateCompleted, setDateComplete] = useState('')

     function handleCompleteChange(evt) {       
          setComplete(!complete)
          const now = new Date(Date.now())
          setDateComplete(now.toDateString())
      }
      
     
     if (complete) {
          return (
               <div>
          <h3>{title}</h3>
          
          <div>{description}</div>
          <br />
          <i>Date Created:<b>{dateCreated}</b></i>
          <br />
          <i>Date Completed:<b>{dateCompleted}</b></i>
      </div>
          )
     } else {
          return (
               <div>
                  <h3>{title}</h3>
                  <div>{description}</div>
                  <br />
                  <i>Date Created:<b>{dateCreated}</b></i>
                  <br />
                  <input type="checkbox" id="completeCheck" onChange={handleCompleteChange} />
                  <label for="completeCheck"> Task Completed? </label><br></br>
              </div> 
         )
     }
}
