import { useEffect } from "react";
import { useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({ username: 'Zero', email: 'zero@gmail.com', password: '123456' })

    const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log("Simple Form Component Rendered!!!");
    }, [])

    useEffect(() => {
        // console.log("formState Changed!!!"); 
    }, [formState])

    useEffect(() => {
        // console.log("email Changed!!!");        
    }, [email])



    return (
        <>
            <h1> Simple Form </h1>
            <hr />

            <input onChange={onInputChange} type="text" name="username" value={username} className="form-control" placeholder="username" />
            <br />
            <input onChange={onInputChange} type="email" name="email" value={email} className="form-control" placeholder="email" id="" />
            <br />
            <input onChange={onInputChange} type="password" name="password" value={password} className="form-control" placeholder="password" />
        </>
    )
}