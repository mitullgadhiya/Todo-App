import React from "react";
import Task from "./Task";

export default ({tasks, markTaskDone, deleteTask}) => {
  return (
    <ul class="list-group">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item">
            <Task task={task} markTaskDone={markTaskDone} deleteTask={deleteTask} />
        </li>
      ))}
    </ul>
  );
};
