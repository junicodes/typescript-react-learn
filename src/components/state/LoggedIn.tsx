
import { useState } from "react";

const LoggedIn = () => {

    const [ isLoggedIn, setIsLoggedIn ] = useState<Boolean>(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    const handleLogout = () => {
        setIsLoggedIn(false)
    };

    return (
        <div>
            <button onClick={handleLogin}></button>
            <button onClick={handleLogout}></button>
            <div>User is { isLoggedIn ? "logged In" : "logged out"} </div>
        </div>
    )
}

export default LoggedIn;