import React from 'react';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <ul className="divide-y divide-gray-300">
      {tasks.map((task) => (
        <li key={task.id} className="py-4">
          <div className="mb-2">
            <strong className="text-blue-600">Title:</strong> {task.title}
          </div>
          <div className="mb-2">
            <strong className="text-blue-600">Description:</strong> {task.description}
          </div>
          <div className="mb-2">
            <strong className="text-blue-600">Due Date:</strong> {task.dueDate}
          </div>
          <div className="mb-2">
            <strong className="text-blue-600">Priority:</strong> {task.priority}
          </div>
          <div className="mb-2">
            <strong className="text-blue-600">Status:</strong> {task.status}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => deleteTask(task.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => updateTask(task.id, { ...task, status: 'Completed' })}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Mark as Completed
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
