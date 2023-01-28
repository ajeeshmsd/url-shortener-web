import React from "react";

export const Login = props => {
    return (
        <div className="h-full flex items-center">
            <h1>Login</h1>
            <form className="flex-row">
                <input type="text" name="uname" placeholder='username' required />
                <input type="password" name="pass" placeholder='password' required />
                <button>Submit</button>
            </form>
        </div>
    );
};