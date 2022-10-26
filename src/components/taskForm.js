import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { addTask, editTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import {FaSave} from 'react-icons/fa'
import {BiArrowBack} from 'react-icons/bi'


export default function TaskForm(){
    const params= useParams()
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const tasks= useSelector(state=> state.tasks)
    const [task,setTask]= useState({
        title:'',
        description:''
    })


    function handleChange(e){
       
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })

    }

    function handleSubmit(e){
        e.preventDefault()

        if(params.id){

            if(task.title.length && task.description.length){
                dispatch(editTask({
                    ...task,
                    id: uuid(),
                }))
                navigate('/')
            }

        }else{
            if(task.title.length && task.description.length){
                dispatch(addTask({
                    ...task,
                    id: uuid(),
                }))
                navigate('/')
            }
        }


        
    }

    useEffect(()=>{
        if(params.id){
           setTask( tasks.find(task=> task.id=== params.id))
        }
    },[])

    


    return(
        <form onSubmit={handleSubmit}
        className='bg-[#EDF0F4] p-4 rounded-md shadow-neu1 shadow-neu2'
        >
            <label htmlFor="title"
            className="block text-xs font-bold mb-2"
            >Task:</label>
            <input
            className="my-3 bg-[#EDF0F4] rounded-xl shadow-innerneu1 shadow-innerneu2 p-2 shadow-md w-full" 
            name={'title'} type={'text'} placeholder='title' onChange={handleChange}
            value={task.title}/>

            <label htmlFor="Description"
            className="block text-xs font-bold mb-2"
            >Description:</label>
            <textarea
            className="my-3 bg-[#EDF0F4] rounded-xl shadow-innerneu1 shadow-innerneu2 p-3 shadow-md w-full" 
            name="description" placeholder="description"
            onChange={handleChange}
            value={task.description}
            />

            <div className="flex gap-x-2">
            <Link to='/' className="bg-white-600 px-2 py-2 rounded-full text-lg  text-blue-600 shadow-neu1 shadow-neu2">
            <BiArrowBack/>
            </Link>
            <button className="bg-white-600 px-2 py-2 rounded-full text-green-600 text-lg shadow-neu1 shadow-neu2 "><FaSave/></button>
            </div>
        </form>
    )
}