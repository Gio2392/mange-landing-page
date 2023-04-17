import { useState } from "react";
import Swal from "sweetalert2";

import { Button } from "./Button";
import './form.css';



const initialForm = {
    email: ''
}

const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

export const Form = () => {

    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        const {value, name} = e.target;
        setForm({...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!regexEmail.test(form.email) || form.email === '') {
            setError(true);
            return;
        };


        Swal.fire({
            icon: 'success',
            title: 'Thank you',
            html: `Please check your email: <b>${form.email}</b> to confirm your account`,
        })
        
        setForm(initialForm)
        setError(false)
    }

    
  return (
    <form className="form" onSubmit={handleSubmit} >
        <input 
        name="email"
        className="form__input"
        type="email" 
        placeholder="Updates in your inbox…" 
        onChange={handleChange}
        value={form.email}
        />
        <Button text="GO" color="orange" type="submit" shadow={false}/>
        {
            error && 
            <span className="error__text">Please insert a valid email</span>
        }
    </form>
  )
}
