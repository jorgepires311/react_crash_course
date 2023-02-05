import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const name = 'Jorge'
  const [tasks, setTasks]=useState([
  {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Food Shoppping",
      "day": "Feb 5th at 2:30pm",
      "reminder": false
    },
] )
// Delete Task
const deleteTask = (id) => {
  console.log('delete', id)
  setTasks(tasks.filter((task) => task.id != id))
}
// Toggle Reminder
const toggleReminder = (id) => {
  console.log('reminder', id)
  setTasks(tasks.cmap((task) =>
      task.id === id ? {...task, reminder:!task.reminder } :task
    )
  )
}

return (
    <div className="container">
      <h1>Hello {name}</h1>
      <Header/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/>
      ) : (
        'No Tasks to Display'
      )}
    </div>
  )
}



export default App;
