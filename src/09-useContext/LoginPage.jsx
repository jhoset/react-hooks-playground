import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);
    // console.log(user);

    return (
        <>
            <h1> Login Page </h1>
            <hr />
            <pre aria-label="user-data">
                {JSON.stringify(user, null, 4)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={() => setUser({ id: 123, name: "Juan", email: "Juancito@gmail.com" })}>
                Set User Data
            </button>
        </>
    )
}