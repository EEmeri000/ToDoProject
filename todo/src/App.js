import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import ToDo from './components/ToDo/ToDo';



function App() {
  return (
    <div className="App">
 

<BrowserRouter>

  <Routes>
  <Route path="/" element={<SignUp />} />
  <Route path="/todo" element={<ToDo />}/>
  </Routes>

</BrowserRouter>


    
    </div>
  );
}

export default App;
