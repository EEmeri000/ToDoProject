import React, { useState }from 'react';
import { LuTrash2, LuEdit } from 'react-icons/lu';
import './ToDo.css';

function ToDo({ task, index, handleCheck, handleRemove, handleEdit }) {
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editMode, setEditMode] = useState(false);
  
    const toggleEditMode = () => {
      setEditMode(!editMode);
      setEditedTitle(task.title);
    };
  
    const saveEditedTask = () => {
      if (editedTitle.trim() !== '') {
        handleEdit(index, editedTitle);
        setEditMode(false);
      }
    };
    return (
        <div className="todo-list">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheck(task.id)}
          />
          {editMode ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <button onClick={saveEditedTask}>Save</button>
            </>
          ) : (
            <>
              <span className={task.completed ? 'task completed' : 'task'}>
                {task.title}
              </span>
              <LuEdit onClick={toggleEditMode} className="theme-icon theme-icon-active" />
              <LuTrash2 onClick={() => handleRemove(index)} className="theme-icon theme-icon-active" />
            </>
          )}
        </div>
      );
    }
    
    export default ToDo;