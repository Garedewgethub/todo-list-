// App.tsx
import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // ... (other code remains the same)
};

export default App;
