import React from 'react';
import './Completed.css'; 

function Completed({ completedTasks }) {
  return (
    <div className="completed-container">
      <h3>Completed Tasks</h3>
      <ul className="completed-list">
        {completedTasks.map((task) => (
          <li key={task.id} className="completed-item">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Completed;