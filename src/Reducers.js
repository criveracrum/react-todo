function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                    'username': action.username,
                    'access_token': action.access_token
                    }
        case 'LOGOUT':
            return {
                    'username': undefined,
                    'access_token': undefined
                    }
        default:
            return state;
    }
}

function usersReducer (state, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            return action.users
        default:
            return state;
    }
}

function todoReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const filtered = state.filter((t) => t.id === action.id )

            if (filtered.length === 0) {
                const newTodo= { 
                    title: action.title,
                    description: action.description, 
                    dateCreated: action.dateCreated, 
                    id: action.id,
                    dateCompleted: null,
                    complete: false,
                    creator: action.user
                    }
                return [ newTodo, ...state ]
            }
            return state;
        
            
        case 'TOGGLE_TODO':
            const now = new Date(Date.now());
            return state.map((todo) => todo.id === action.id ? {...todo, complete: !todo.complete,  dateCompleted: now.toDateString()}
            : todo)
             
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        case 'USER_TODO':
            console.log(action.user)
            return state.filter((todo) => todo.creator === action.creator);
        case 'FETCH_TODOS':
            return action.todos
        default:
           return state;
    }
  }


export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        users: usersReducer(state.users, action),
        todos: todoReducer(state.todos, action)
    }
}