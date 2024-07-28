import './App.css';
import image from './toDoList.jpg';
import marker from './done.jpg';
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={image} width='300px' alt='toDoList'/>
      </div>
      <div className='container'>
        <h1>To Do List</h1>
      </div>
      <ToDoList/>
      <div className='container'>
        <img src={marker} width='200px' alt='marker'/>
      </div>
   
    </div>
  );
}

export default App;
