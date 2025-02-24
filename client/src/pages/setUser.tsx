
export const SetUser:React.FC = () => {
    const checkAuth = async () => {
        const res = await fetch("/auth/google/user", {
            credentials: "include", // Sends cookies
        });
        const data = await res.json();
        console.log('thsi',data);
    }
    checkAuth();
    return(
<>
</>
    );
}