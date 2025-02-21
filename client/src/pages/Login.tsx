


export const Login: React.FC = ()=>{

    const handleLogin = () => {
        window.location.replace("/auth/google");
    };
    
    return(
        <button onClick={handleLogin}>
        Login in with google
        </button>
    )
}