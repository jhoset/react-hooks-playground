import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"


describe("Tests on <HomePage />", () => {


    test("Should display component without user", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("user-data");
        expect(preTag.innerHTML).toBe("null");
    })

    test("Should display component with user data", () => {
        const user = {
            name: "Hi"
        }
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("user-data");
        expect(preTag.innerHTML).toContain(`"name": "${user.name}"`)
    })


})