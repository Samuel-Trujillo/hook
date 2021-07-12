import { div } from 'prelude-ls';
import React, {useState} from 'react';

const Form = (props) =>{
    const [user, setUser]= useState ({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""
    })

    const controlSubmit = (event) => {
        event.preventDefault();
    }

    const controlChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit = {controlSubmit}>
                <p>{JSON.stringify(user)}</p>
                <p>
                    <label htmlFor="firstName">First Name: </label>
                    <input onChange = {controlChange} type="text" name = "firstName"/>
                </p>
                <p>
                <label htmlFor="lastName">Last Name: </label>
                <input onChange = {controlChange} type="text" name = "lastName"/>
                </p>
                <p>
                <label htmlFor="lastName">Last Name: </label>
                <input onChange = {controlChange} type="text" name = "lastName"/>
                </p>
                <p>
                <label htmlFor="email">email: </label>
                <input onChange = {controlChange} type="text" name = "email"/>
                </p>
                <p>
                <label htmlFor="password">password: </label>
                <input onChange = {controlChange} type="text" name = "password"/>
                </p>
                <p>
                <label htmlFor="confirmPassword">confirm password: </label>
                <input onChange = {controlChange} type="text" name = "confirmPassword"/>
                </p>
            </form>
        </div>
    )
}

export default Form;
                

