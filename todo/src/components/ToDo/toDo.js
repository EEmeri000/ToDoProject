import React from 'react';
import { LuTrash2, LuEdit } from 'react-icons/lu';
import './ToDo.css';

function ToDo({ task, index, handleCheck, handleRemove }) {
  return (
    <div className="todo-list">
      {/* Checkbox and task */}
      <input
        type="checkbox"
        checked={task.completed} // Add checked attribute
        onChange={() => handleCheck(task.id)} // Call handleCheck function
      />
      <span className={task.completed ? 'task completed' : 'task'}>
        {task.title}
      </span>

      {/* Delete and edit button */}
      <LuTrash2
        className="theme-icon theme-icon-active"
        onClick={() => handleRemove(index)}
      />
      <LuEdit />
    </div>
  );
}

export default ToDo