import { login } from "../actions";
import React, { useState } from 'react';
import { connect } from 'react-redux';;


function Login(props) {
    const [creds, setCreds] = useState({
        username: "",
        password: ""
    });
    const handleChanges = (e) => {
        let target = e.target;
        setCreds((creds) => {
            return {
                ...creds,
                [target.id]: target.value
            }
        })
    };

    const onSubmit = e => {
        e.preventDefault();
        props.login(creds);
        setCreds({
            username: "",
            password: ""
        })
    }

    return (

        <div>
            <form action="submit">
                <label htmlFor="username">username:</label>
                <input type="text" id="username" value={creds.username} placeholder="username here" onChange={handleChanges} />
                <label htmlFor="password">password:</label>
                <input type="password" id="password" value={creds.password} placeholder="password here" onChange={handleChanges} />
                <button onClick={onSubmit}>Login</button>
            </form>
        </div>
    )
}
export default connect(null, { login })(Login);
