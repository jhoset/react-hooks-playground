import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe("Tests on <LoginPage />", () => {

    test("Should display component without user", () => {
        render(
            <UserContext.Provider value={{}}>
                <LoginPage />
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText("user-data");
        expect(preTag.innerHTML).toBe("");
    })

    test("Should call setUser Fn When click on Btn", () => {
        const setUser =  jest.fn();
        render(
            <UserContext.Provider value={{ user: {}, setUser }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const setUserDataBtn = screen.getByRole("button");
        fireEvent.click(setUserDataBtn);

        expect(setUser).toHaveBeenCalled();

    })

})