import {useEffect} from "react";
export const Logout:React.FC = () => {
    useEffect(() => {
        localStorage.clear(); 
        sessionStorage.clear();
        window.location.href = "/";
    })
    return (
        <div>
            loggin out ....
        </div>
    )
    
}