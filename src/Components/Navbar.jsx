import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export function NavBar (props){
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/")
    }

    return(
        <>
        <div className="nav_logo">
            <h1>LOGO</h1>
        </div>
        {(props.type == null) ? <div className="nav_content">
            <h2>My Projects</h2>
            <button className="btn" onClick={()=>{navigate("/create")}}> 
                <TiPlus size={16}/>
                add Project
            </button>
        </div>
        :<div className="nav_content back">
            <div onClick={handleNavigate}> 
                <IoArrowBackOutline />
                <span>back</span>
            </div>
            <h2>{props.type} projects</h2>
        </div>}
        </>
    )
}