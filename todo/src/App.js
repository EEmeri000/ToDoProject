import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import ToDoList from './components/ToDo/ToDoList';



function App() {
  return (
    <div className="App">
 

<BrowserRouter>

  <Routes>
  <Route path="/" element={<SignUp />} />
  <Route path="/todolist" element={<ToDoList />}/>
  </Routes>

</BrowserRouter>


    
    </div>
  );
}

export default App;
