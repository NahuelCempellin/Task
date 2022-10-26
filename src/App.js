import './App.css';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import {Route,Routes} from 'react-router-dom'

function App() {

  //anterior bg-zinc-900 h-screen text-white


  return (
    <div className="bg-[#EDF0F4] h-screen text-black">
      <div className='flex items-center justify-center h-full'>
      <Routes>
        <Route path='/' element={<TaskList/>}/>
        <Route path='/create-task' element={<TaskForm/>}/>
        <Route path='/edit-tasks/:id' element={<TaskForm/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
