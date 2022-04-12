import React, {useEffect, useState} from "react";
import axios from "axios";

const PersonForm = () => {
    const [message, setMessage] = useState('Loading...');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then(res=>setMessage(res.data.message))
            .catch(err=>console.log(err))
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
        .then(res=>{
            console.log(res);
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label>
                <input type='text' onChange = {(e)=> setFirstName(e.target.value)}></input>

                <label>Last Name</label>
                <input type='text' onChange = {(e)=> setLastName(e.target.value)}></input>
            </p>
            <button type="submit">submit</button>
        </form>
    )
}

export default PersonForm;