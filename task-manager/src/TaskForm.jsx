import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      title,
      description,
      dueDate,
      priority,
      status,
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('');
    setStatus('');
  };

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;

    
    if (selectedStatus === 'completed' || selectedStatus === 'not completed') {
      setStatus(selectedStatus);
    } else {
      console.log('Invalid status. Please select either "completed" or "not completed".');
    }
  };

  const handlePriorityChange = (e) => {
    const selectedPriority = e.target.value;

    
    if (selectedPriority === 'low' || selectedPriority === 'medium' || selectedPriority === 'high') {
      setStatus(selectedPriority);
    } else {
      console.log('Invalid Priority. Please select either "completed" or "not completed".');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded-md shadow-md">
      <label className="block mb-4">
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full mt-1 p-2 border rounded" />
      </label>
      <label className="block mb-4">
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full mt-1 p-2 border rounded" />
      </label>
      <label className="block mb-4">
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full mt-1 p-2 border rounded" />
      </label>
      <label className="block mb-4">
        Priority:
        <select value={priority} onChange={handlePriorityChange} className="w-full mt-1 p-2 border rounded">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <label className="block mb-4">
        Task Status:
        <select value={status} onChange={handleStatusChange} className="w-full mt-1 p-2 border rounded">
          <option value="">Select...</option>
          <option value="Completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Add Task</button>
    </form>

  );
};

export default TaskForm;
