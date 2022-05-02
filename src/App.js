import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";


function App() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextid] = useState(0);

  // create task
  const createTask = description => {
    setTasks(tasks => ([...tasks, {id: nextId, description, done: false}]));
    setNextid(nextId + 1);
  }

  // markTaskDone
  const markTaskDone = id => {
    const newTaskList = tasks.map(task => {
      if(task.id === id) {
        task.done = true;
      }
      return task;
    });
    setTasks(newTaskList);
  }

  // Delete the task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <h1 className="display-4">Todo App</h1>
          </div>
        </div>
      </div>
      <NewTask createTask={createTask} />
      <TaskList 
        tasks={tasks} 
        markTaskDone={markTaskDone}
        deleteTask={deleteTask} />
    </div>
  );
}

export default App;
