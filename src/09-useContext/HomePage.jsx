import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <h1> Home Page <small> {user?.name} </small> </h1>
            <hr />
            <pre aria-label="user-data">
                {JSON.stringify(user, null, 4)}
            </pre>
        </>
    )
}