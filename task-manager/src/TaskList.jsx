import React from 'react';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div>
            <strong>Title:</strong> {task.title}
          </div>
          <div>
            <strong>Description:</strong> {task.description}
          </div>
          <div>
            <strong>Due Date:</strong> {task.dueDate}
          </div>
          <div>
            <strong>Priority:</strong> {task.priority}
          </div>
          <div>
            <strong>Status:</strong> {task.status}
          </div>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => updateTask(task.id, { ...task, status: 'Completed' })}>
            Mark as Completed
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
