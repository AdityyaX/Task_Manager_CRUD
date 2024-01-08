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
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </label>
      <br />
      <label>
        Priority:
 
        <select value={priority} onChange={handlePriorityChange} >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <br />

      <label>
        Task Status:
        <select value={status} onChange={handleStatusChange}>
          <option value="">Select...</option>
          <option value="completed">Ongoing</option>
          <option value="not completed">Not Completed</option>
        </select>
      </label>
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
