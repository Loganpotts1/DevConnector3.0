import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
//  LOCAL
import { login } from "../../actions/auth";


export default function Login(props) {
    const { register } = props;
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const [ formData, setFormData ] = React.useState({
        email: "",
        password: "",
    });
    const {
        email, 
        password
    } = formData;


    //  Check to see if user is already logged in, then redirect to /dashboard
    if (isAuthenticated)
    return <Redirect to="/dashboard" />;


    const onChange = event => setFormData({
        ...formData, [event.target.name]: event.target.value 
    });

    
    const onSubmit = async event => {
        event.preventDefault();
        
        dispatch(login({
            email,
            password
        }));
    };


    return(
        <div className="login">


            <h1 className="login__heading">
                Log Into Your Account
            </h1>


            <form className="login__form" onSubmit={onSubmit}>

                <div className="login__form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email" 
                        value={email} 
                        onChange={onChange}
                    />
                </div>

                <div className="login__form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        minLength="6"
                        onChange={onChange}
                    />
                </div>

                <input 
                    type="submit" 
                    className="login__submit" 
                    value="Login" 
                    onChange={onChange} 
                />

            </form>


            <p className="login__switch">
                Don't have an account?
                <a href="#!" onClick={register}>
                    {" Sign Up"}
                </a>
            </p>


        </div>
    );
};