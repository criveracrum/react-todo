import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

function App() {
  const date = new Date(Date.now())
  const todos = [
    {
      title: "Dishes",
      description: "Please wash the dishes. They are filthy.",
      dateCreated: date.toDateString()
    },
    {
      title: "Homework",
      description: "Do you homework for CSC436",
      dateCreated: date.toDateString()
    },
    {
      title: "Workout",
      description: "You know its good for your health.",
      dateCreated: date.toDateString()
    },
    {
      title: "Prep for Winter",
      description: "",
      dateCreated: date.toDateString()
    }
  ]
  return (<div>
            <UserBar />
            <br/><br/><hr/><br/>
            <CreateTodo />
            <TodoList todos={todos}/>
        </div>
  )
}

export default App;
