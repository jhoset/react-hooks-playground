import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Tests on <MainApp />', () => {
    test('should display Home Page', () => {


        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText("Home Page")).toBeTruthy();

    })

    test('should display Login Page', () => {


        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )
        screen.debug();
        expect(screen.getByText("Login Page")).toBeTruthy();

    })

})
