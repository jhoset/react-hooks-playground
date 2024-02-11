import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {


    const { formState, onInputChange, onResetForm, username, email, password } = useForm({ username: '', email: '', password: '' })


    return (
        <>
            <h1> Simple Form With Custom Hook </h1>
            <hr />

            <input onChange={onInputChange} type="text" name="username" value={username} className="form-control" placeholder="username" />
            <br />
            <input onChange={onInputChange} type="email" name="email" value={email} className="form-control" placeholder="email" id="" />
            <br />
            <input onChange={onInputChange} type="password" name="password" value={password} className="form-control" placeholder="password" />
            <br />
            <button onClick={onResetForm} className="btn btn-danger w-100">Reset</button>
        </>
    )
}