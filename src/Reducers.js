function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

function todoReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
          const newTodo= { 
              title: action.title,
              description: action.description, 
              dateCompleted: action.dateString 
            }
            return [ newTodo, ...state ]
        case 'TOGGLE_TODO':
            const now = new Date(Date.now())
            console.log(state.map((todo,i) => i === action.index ? {...todo, complete: true,  dateCompleted: now.toDateString()}
            : todo));
            return state.map((todo,i) => i  === action.index ? {...todo, complete: !todo.complete,  dateCompleted: now.toDateString()}
            : todo)
             
        case 'DELETE_TODO':
            return state.filter((todo,i) => i !== action.index);
        default:
           return state;
    }
  }


export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}