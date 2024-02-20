import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter";


jest.mock('../../src/hooks/useFetch');
jest.mock("../../src/hooks/useCounter");

describe('Tests on <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("Should show the default component", () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks />);

        expect(screen.getByText("Loading..."))
        expect(screen.getByText("Rick and Monty - Members"));
        const nextButton = screen.getByRole("button", { name: "Next Member" });
        // console.log(nextButton.disabled);
        expect(nextButton.disabled).toBe(true)
        // screen.debug();

    })

    test("Should show a Member", () => {
        useFetch.mockReturnValue({
            data: { name: "Rick", location: { name: "Peru" }, image: "https:google.com/img" },
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);

        expect(screen.getByText("Peru")).toBeTruthy();
        expect(screen.getByText("Rick")).toBeTruthy();
        // screen.debug();
        const nextButton = screen.getByRole("button", { name: "Next Member" })
        expect(nextButton.disabled).toBeFalsy();

    })

    test("Should call increment Function", () => {


        useFetch.mockReturnValue({
            data: { name: "Rick", location: { name: "Peru" }, image: "https:google.com/img" },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole("button", { name: "Next Member" })
        fireEvent.click(nextButton)

        expect(mockIncrement).toHaveBeenCalled();


    })
})
