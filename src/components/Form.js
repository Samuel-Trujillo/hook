
import React, {useState} from 'react';

const Form = (props) =>{

    const [namefValErr, setNamefValErr] = useState("");
    const [namelValErr, setNamelValErr] = useState("");
    const [emailValErr, setEmailValErr] = useState("");
    const [passValErr, setPassValErr] = useState("");
    const [matchValErr, setMatchValErr] = useState("");

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
        //first name validations start
        if (e.target.value.length < 2 && e.target.value.length > 0){
            setNamefValErr("must be at least 2 characters long");
        }
        else if(e.target.value === ""){
            setNamefValErr("cannot be blank");
        }
        else {
            // else clears input
            setNamefValErr("");
            // if there are no errors, update state
            setUser(e.target.value)
        }
        //last name validations start
        if (e.target.value.length < 2 && e.target.value.length > 0){
            setNamelValErr("must be at least 2 characters long");
        }
        else if(e.target.value === ""){
            setNamelValErr("cannot be blank");
        }
        else {
            // else clears input
            setNamelValErr("");
            // if there are no errors, update state
            setUser(e.target.value)
        }
        
        //email validations start
        if (e.target.value.length < 5 && e.target.value.length > 0){
            setEmailValErr("email must be at least 5 characters long");
        }
        else if(e.target.value === ""){
            setEmailValErr("cannot be blank");
        }
        else {
            // else clears input
            setEmailValErr("");
            // if there are no errors, update state
            setUser(e.target.value)
        }

        //password validations start
        if (e.target.value.length < 8 && e.target.value.length > 0){
            setPassValErr("password must be at least 8 characters long");
        }
        else if(e.target.value === ""){
            setPassValErr("cannot be blank");
        }
        else {
            // else clears input
            setPassValErr("");
            // if there are no errors, update state
            setUser(e.target.value)
        }

        //confirm password validations start
        if (e.target.value != user.password){
            setMatchValErr("passwords must match");
        }
        else if(e.target.value === ""){
            setMatchValErr("cannot be blank");
        }
        else {
            // else clears input
            setMatchValErr("");
            // if there are no errors, update state
            setUser(e.target.value)
        }
        
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
                    {namefValErr ? <span style={{ color: "red" }}>{namefValErr}</span> : <span>&nbsp;</span>}
                </p>
                <p>
                    <label htmlFor="lastName">Last Name: </label>
                    <input onChange = {controlChange} type="text" name = "lastName"/>
                    {namelValErr ? <span style={{ color: "red" }}>{namelValErr}</span> : <span>&nbsp;</span>}
                </p>
                <p>
                    <label htmlFor="email">email: </label>
                    <input onChange = {controlChange} type="text" name = "email"/>
                    {emailValErr ? <span style={{ color: "red" }}>{emailValErr}</span> : <span>&nbsp;</span>}
                </p>
                <p>
                    <label htmlFor="password">password: </label>
                    <input onChange = {controlChange} type="text" name = "password"/>
                    {passValErr ? <span style={{ color: "red" }}>{passValErr}</span> : <span>&nbsp;</span>}
                </p>
                <p>
                    <label htmlFor="confirmPassword">confirm password: </label>
                    <input onChange = {controlChange} type="text" name = "confirmPassword"/>
                    {matchValErr ? <span style={{ color: "red" }}>{matchValErr}</span> : <span>&nbsp;</span>}
                </p>
                <input type="submit" value = "create" />
            </form>
        </div>
    )
}

export default Form;
                

