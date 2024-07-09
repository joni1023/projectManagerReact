import { NavBar } from "../Components/Navbar"
import { Form } from "../Components/Form"
import { useState, useEffect } from "react";

export function Create () {
    const [task,setTask] = useState(()=>{
        const saved = localStorage.getItem('task');
        return saved? JSON.parse(saved):[];
    });
    
      useEffect(() => {
        localStorage.setItem('task', JSON.stringify(task));
      }, [task]);

    const addTask = (newtask) => {
        newtask = { ...newtask, id: Date.now()}; 
        setTask((prevTasks) => [...prevTasks, newtask]);
        alert("se agrego corectamente ")
      };
      
    return (
        <>
        <NavBar type="Add"></NavBar>
        <section className="section_page">
        <div className="section_form">
            <Form addTask= {addTask} />
        </div>
        </section>
        
        </>
    )
}