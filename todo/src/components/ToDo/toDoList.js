import React,{useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import Completed from '../Completed/Completed';
import './ToDo.css'


function ToDoList(){

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Grab some Pizza",
            completed: true
        },
        {
            id: 2,
            title: "Do your workout",
            completed: true
        },
        {
            id: 3,
            title: "Hangout with friends",
            completed: false
        }
    ]);
    
    const addTask = (title) => {
        const newTasks = [...tasks, { id: tasks.length + 1, title, completed: false }];
        setTasks(newTasks);
      }
    
      const handleCheck = (taskId) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
    
        setTasks(updatedTasks);
      };
    
      const handleRemove = (index) => {
        setTasks(oldValues => oldValues.filter((_, i) => i !== index));
      }
    
      const handleEdit = (index, newTitle) => {
        const updatedTasks = tasks.map((task, i) => {
          if (i === index) {
            return { ...task, title: newTitle };
          }
          return task;
        });
    
        setTasks(updatedTasks);
      };
    
    
      const completedTasks = tasks.filter((task) => task.completed);

   


      return (
        <div className="todo-container">
          <div className="header">Tasks to Manage</div>
          <div className="tasks">
            {tasks.map((task, index) => (
              <ToDo
                task={task}
                index={index}
                key={index}
                handleCheck={handleCheck} 
                handleRemove={handleRemove}
                handleEdit={handleEdit}
              />
            ))}
          </div>
          <div className="create-task">
            <ToDoForm addTask={addTask} handleRemove={handleRemove} />
          </div>
          <Completed completedTasks={completedTasks} /> {/* Add the Completed component */}
        </div>
      );
    }

export default ToDoList