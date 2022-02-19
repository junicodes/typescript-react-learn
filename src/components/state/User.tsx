import { useState } from "react";


type AuthUser = {
    name: string,
    email: string
}

const User = () => {

    const [ user, setUser ] = useState<AuthUser | null>(null);
    // const [ user, setUser ] = useState<AuthUser>({} as AuthUser); //If you are sure of the payload

    const handleLogin = () => {
        setUser({
            name: "David",
            email: "dave@gmail.com"
        })
    };
    const handleLogout = () => {
        setUser(null)
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {user?.name} </div>
            <div>User email is {user?.email} </div>
        </div>
    )
}

export default User;