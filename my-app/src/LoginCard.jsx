import { useState } from "react"
export const LoginCard = () => {

    const [isLoggedIN, SetIsLoggedIN] = useState(false);
    const [message, setMessage] = useState("");

    const hadleLogin = () => {
        SetIsLoggedIN(!isLoggedIN);
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    }
    return (
        <>
            <button onClick={hadleLogin}>{isLoggedIN  ? "logout" : "login"}</button>
            <div>
                <input type="text" placeholder="Enter your username" onChange={handleChange} value={message} />
            </div>
            <p>{message}</p>
        </>
    )
}