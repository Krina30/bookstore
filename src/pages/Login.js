import React from "react";
import { useNavigate } from "react-router-dom";
function Login()
{
        const Navigate = useNavigate();
        const onRegister=() => {
        //Navigate("/")
        alert("the button is clicked")
        };
    return(
        <div>
        <h1> Login works </h1>
        <button onClick={onRegister}>go to register</button>
        </div>
    );
}
export default Login;