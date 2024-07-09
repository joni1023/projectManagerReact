import { NavBar } from "../Components/Navbar"
import { Form } from "../Components/Form"
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export function Edit (){
    const location = useLocation();
    const { task } = location.state || {};
    const [tasks,setTasks] = useState(()=>{
        const saved = localStorage.getItem('task');
        return saved? JSON.parse(saved):[];
    });
    const navigate =useNavigate();
    
      useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks));
      }, [tasks]);

    const updateTask = (newtask) => { 
        setTasks((prevTasks)=>
        prevTasks.map((t)=>
        t.id === task.id? {...t, ...newtask }: t
        )
        );

        alert("se modifico");
        navigate('/');
      };
    
      
    return(
        <>
        <NavBar type="Edit"/>
        <section className="section_page">
        <div className="section_form">
            <Form task={task} updateTask={updateTask}/>
        </div>
        </section>
        
        </>
    )
}