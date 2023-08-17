import React,{useState} from 'react'
import './ToDo.css'
// import ToDoList from './ToDoList';

function ToDoForm({ addTask}) {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }




  return (
    <div>
      
      <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="task"
                    value={value} 
                    placeholder="Add a new task"
                    onChange={e => setValue(e.target.value)}
                />
            </form>

        
        
        
        </div>
  )
}

export default ToDoForm