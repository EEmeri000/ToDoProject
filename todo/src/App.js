import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import ToDoList from './components/ToDo/ToDoList';
// import Completed from './components/Completed/Completed'; // Broken, for later



function App() {
  return (
    <div className="App">
 

<BrowserRouter>

  <Routes>
  <Route path="/" element={<SignUp />} />
  <Route path="/todolist" element={<ToDoList />}/>
  {/* <Route path="/completed" element={<Completed />} /> This is Broken */}

  </Routes>

</BrowserRouter>


    
    </div>
  );
}

export default App;
