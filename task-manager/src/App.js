import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './tailwind.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task,dueDate) => {
    const currentDate = new Date();
    const inputDueDate = new Date(dueDate);
  
    if (inputDueDate < currentDate) {
      console.log('Error: Due date must be in the future.');
      return;
    }
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTasks) => {
    
    const sortedTasks = updatedTasks.sort((a, b) => {
    
      const dueDateA = a.dueDate ? new Date(a.dueDate) : null;
      const dueDateB = b.dueDate ? new Date(b.dueDate) : null;
  
    
      if (dueDateA && dueDateB) {
        const dueDateComparison = dueDateA - dueDateB;
        if (dueDateComparison !== 0) {
          return dueDateComparison;
        }
      }
  
    
      return a.priority.localeCompare(b.priority);
    });
  
    setTasks(sortedTasks);
  };
  return (
<>

    <div className="flex items-center justify-center h-screen ">
    <div className="container mx-auto p-4 center">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
    </div>
    </>
  );
};
export default App;
