import { NavBar } from "../Components/Navbar"
import { useState, useEffect } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { ProfileImage } from "../Components/ProfileImage";
import '../App.css'

export function Home () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [task,setTask] = useState(()=>{
  const saved = localStorage.getItem('task');
    return saved? JSON.parse(saved):[];
  });
  const navigate = useNavigate();

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
  }, [task]);

  
  const handleNavigate = (task) => {
    navigate('/edit', { state: { task : task } });  
  };
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };
  const handleDeleteClick = (rowId) => {
    const newTask = task.filter((item) => item.id !== rowId);
    setTask(newTask);
    alert("se elimino correctamente");
  };

  const fDateTimeSuffix=(date) => {
    return format(new Date(date), 'dd/MM/yyyy hh:mm p');
  }
    return(
    <>
      <NavBar />
      {isMobile?
        <div className='task_table'>
        <table>
          <tbody>
            {task.map((row)=>(
              <tr key={row.id} >
                <td>
                <div className="task_detail">
                  <div className="detail">
                    <h6>{row.name}</h6>
                    <p>Creation date : {fDateTimeSuffix(row.id)} </p>
                  </div>
                <div className="btn_menu_section">
                    <button className="btn_menu" onClick={() => toggleMenu(row.id)}>
                        <CiMenuKebab/>
                    </button>
                    {openMenuId === row.id &&(
                      <div className="menu_btn">
                        <div onClick={()=>handleNavigate(row)} className="bd_bottom">
                          <RiEditBoxLine/>
                          <p>Edit</p>
                        </div>
                        <div onClick={()=>handleDeleteClick(row.id)}>
                          <RiDeleteBin7Line/>
                          <p>Delete</p>
                        </div>
                      </div>
                    )}
                    
                </div>
                
                </div>
                <div className="task_user">
                  <img src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="icoon user" />
                  <p>{row.assignedTo}</p>
                </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      :
      <div className="task_table big">
        <table>
    <thead>
      <tr>
        <th>Project info</th>
        <th>Project Manager</th>
        <th>Assigned to</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {task.map((row) => (
        <tr key={row.id}>
          <td className="task">
            <div className="detail">
            {row.name}
            <p>Creation date : {fDateTimeSuffix(row.id)} </p>
            </div>
          </td>
          <td>
          <div className="task_user">
                  <ProfileImage name={row.projectManager}/>
                  <p>{row.projectManager}</p>
                </div>
          </td>
          <td>
          <div className="task_user">
                  <img src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="icoon user" />
                  <p>{row.assignedTo}</p>
                </div>
          </td>
          <td><span>{row.status}</span></td>
          <td><button className="btn_menu" onClick={() => toggleMenu(row.id)}>
                        <CiMenuKebab/>
                    </button>
                    {openMenuId === row.id &&(
                      <div className="menu_btn">
                        <div onClick={()=>handleNavigate(row)} className="bd_bottom">
                          <RiEditBoxLine/>
                          <p>Edit</p>
                        </div>
                        <div onClick={()=>handleDeleteClick(row.id)}>
                          <RiDeleteBin7Line/>
                          <p>Delete</p>
                        </div>
                      </div>
                    )}</td>
        </tr>
      ))}
    </tbody>
  </table>

      </div>
      }
      
    </>
    )
}