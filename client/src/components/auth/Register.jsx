import React, { Fragment } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../../actions/types";
import { setAlert } from "../../actions/alert";

export default function Register() {
    const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });
    const {
        name,
        email,
        password,
        password2
    } = formData;


    const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });


    const onSubmit = async event => {
        event.preventDefault();

        if (password !== password2)
        dispatch(setAlert("Passwords do not match", "danger"));

        try {
            const newUser = {
                name,
                email,
                password
            };

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };

            const body = newUser;

            const res = await axios.post("/api/users", body, config);

            console.log(res.data);
        } catch (err) {
            console.log(err.response.data);
        }
        
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email" 
                        value={email} 
                        onChange={onChange}
                    />
                    <small className="form-text"
                        >This site uses Gravatar so if you want a profile image, use a
                        Gravatar email
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        minLength="6"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        minLength="6"
                        onChange={onChange}
                    />
                </div>
                <input 
                    type="submit" 
                    className="btn btn-primary" 
                    value="Register" 
                    onChange={onChange} 
                />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>
    );
}
