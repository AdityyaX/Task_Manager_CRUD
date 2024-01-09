import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Navbar from './components/navbar';
import Footer from './components/footer';
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

  const updateTask = (taskId, updatedTask) => {
   
    if (!Array.isArray(tasks)) {
      console.error('Error: tasks is not an array.');
      return;
    }
  
   
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
  
    if (taskIndex === -1) {
      console.error(`Error: Task with id ${taskId} not found.`);
      return;
    }
  
   
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], ...updatedTask };
  
    // Sort the array
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
      <Navbar />
      <div className="flex flex-col bg-gray-200 min-h-screen">
        <div className="container mx-auto p-4 flex flex-col sm:flex-row justify-between mt-20">
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
      </div>
      <Footer/>
    </>

  );
};
export default App;
