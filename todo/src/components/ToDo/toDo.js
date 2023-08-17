import React, {useState} from 'react'
import { LuTrash2, LuEdit } from "react-icons/lu";
import './ToDo.css'

function ToDo({tasks, task, setTasks, index, handleRemove }) {
// const [checked, setChecked] = useState(false); 
  
// const handleCheck = (e) => {
 
//     setChecked(true);
// }  


return (

  <div className="todo-list">

{/* checkbox and task  */}
<input value={task} type="checkbox" />
<span className="task">{task.title} </span>

{/* delete and edit button  */}
<LuTrash2 className="theme-icon theme-icon-active" onClick={() =>  handleRemove(index)}/>
<LuEdit  />
</div>


);
}



export default ToDo