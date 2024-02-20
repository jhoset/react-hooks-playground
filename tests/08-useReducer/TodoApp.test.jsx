const { render, screen } = require("@testing-library/react");
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("Tests on <TodoApp />", () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: "TODO 1", done: false },
            { id: 2, description: "TODO 2", done: true },
        ],
        allTodos: 2,
        pendingTodos: 1,
        onHandleAddTodo: jest.fn(),
        onHandleRemove: jest.fn(),
        onHandleToggleTodo: jest.fn()
    });


    test("Should display component seamlessly", () => {

        render(<TodoApp />)

        expect(screen.getByText("TODO 1")).toBeTruthy();
        expect(screen.getByText("TODO 2")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
        // screen.debug();
    })
})