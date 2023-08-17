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
    
    const addTask = title => {
        const newTasks = [...tasks, { id: tasks.length + 1, title, completed: false }];
        setTasks(newTasks);
        console.log(tasks)
    }


    const handleRemove = index => {
        setTasks(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
    }
    
    const handleCheck = (taskId) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: true };
          }
          return task;
        });
    
        setTasks(updatedTasks);
      };
    
      const completedTasks = tasks.filter((task) => task.completed);

   


      return (
        <div className="todo-container">
          <div className="header">TODO - ITEMS</div>
          <div className="tasks">
            {tasks.map((task, index) => (
              <ToDo
                task={task}
                index={index}
                key={index}
                handleCheck={handleCheck} 
                handleRemove={handleRemove}
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