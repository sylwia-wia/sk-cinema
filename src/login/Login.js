import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import button from "bootstrap/js/src/button";
import axios from "axios";


function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const onClickLoginHandler = function (e) {
        e.preventDefault();
        axios.post('http://localhost:8080/login', {
            username,
            password
        })
            .then(res => {
                const token = res.data.token;
                localStorage.setItem('token', token);
                navigate(`/rooms`);
            })
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Login</label>
                        <input
                            type="login"
                            className="form-control mt-1"
                            placeholder="Login"
                            onChange={e => setUsername(e.target.value)}

                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}

                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-dark" onClick={onClickLoginHandler}>
                            Submit
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Login;