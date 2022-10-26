import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/task/taskSlice";
import { Link } from "react-router-dom";
import {AiTwotoneDelete, AiFillEdit} from 'react-icons/ai'


export default function TaskList(){
    const dispatch = useDispatch()
    const tasks= useSelector(state=> state.tasks)
    

    function handleDelete(id){
        dispatch(deleteTask(id))

    }

    return(
        <div className="w-4/6">
            <header className="flex justify-between items-center py-4">
            <h1 className="text-indigo-600 text-2xl font-bold">Tasks: {tasks.length}</h1>
            <Link to='/create-task'
            className="bg-white-600 px-4 py-3 rounded-full text-sm text-indigo-600 font-bold shadow-neu1 shadow-neu2"
            
            >Create task</Link>
            </header>

           <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
           {
                tasks.map(task =>(
                    <div key={task.id}
                    className='bg-white-600 p-6 rounded-md shadow-neu1 shadow-neu2'
                    >

                        <header className="flex justify-between">
                        <h3>{task.title}</h3>
                        <div className="flex gap-x-2">
                        <Link to={`/edit-tasks/${task.id}`}
                        className='bg-white-600 px-2 py-2 text-lg rounded-full shadow-neu1 shadow-neu2 text-blue-600'
                        ><AiFillEdit /></Link>
                        <button onClick={()=>handleDelete(task.id)}
                        className='bg-white-600 px-2 py-2  text-lg rounded-full shadow-neu1 shadow-neu2 text-red-600'
                        ><AiTwotoneDelete/></button>
                        </div>
                        </header>
                        <p>{task.description}</p>
                    </div>
                ))
            }
           </div>
           
        </div>
    )
}