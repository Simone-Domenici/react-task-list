import React, { useState } from 'react'
import './index.css'
import './App.css'
import tasks from './tasks.js'

function Task({ task }) {
  const statusColors = {
    backlog: 'orange',
    in_progress: 'blue',
    completed: 'green',
  };

  return (
    <li className="task">
      <span className="task-title">{task.title}</span>
      <span className="status" style={{ backgroundColor: statusColors[task.state] }}>
        {task.state}
      </span>
      <div className="task-details">
        <div>Priority: {task.priority}</div>
        <div>Est. Time: {task.estimatedTime} mins</div>
      </div>
      
    </li>
  );
}

function TaskList() {
  const [tasksData] = useState(tasks);

  const inProgressTasks = tasksData.filter(task => task.state === 'backlog' || task.state === 'in_progress');
  const completedTasks = tasksData.filter(task => task.state === 'completed');

  return (
    <>
      <h1 className='main-title'>Task Manager</h1>
      <div className="task-list">
        <h2>Current Tasks ({inProgressTasks.length})</h2>
        <ul>
          {inProgressTasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </ul>

        <hr className="task-separator" />

        <h2>Completed Tasks ({completedTasks.length})</h2>
        <ul>
          {completedTasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;