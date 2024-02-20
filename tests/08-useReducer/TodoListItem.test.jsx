import { fireEvent, render, screen } from "@testing-library/react";
import { TodoListItem } from "../../src/08-useReducer/TodoListItem";


describe("Tests on <TodoListItem />", () => {

    const todo = {
        id: 1,
        description: "Hi Little Guy",
        done: false,
    };

    const onRemoveFnMock = jest.fn();
    const onToggleFnMock = jest.fn();


    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('Should display pending TODO', () => {
        render(
            <TodoListItem
                todo={todo}
                onHandleRemove={onRemoveFnMock}
                onToggleTodo={onToggleFnMock} />
        );

        const liElement = screen.getByRole('listitem');
        const button = screen.getByRole("button");
        const doneIndicator = screen.queryByText("Done");
        // console.log(doneIndicator);
        expect(doneIndicator).toBe(null)
        expect(button.innerHTML.trim()).toBe("Remove");
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between");
    })

    test('Should display completed TODO', () => {
        todo.done = true;

        render(
            <TodoListItem
                todo={todo}
                onHandleRemove={onRemoveFnMock}
                onToggleTodo={onToggleFnMock} />
        );

        const liElement = screen.getByRole('listitem');
        const button = screen.getByRole("button");
        const doneIndicator = screen.queryByText("Done");
        // console.log(doneIndicator);
        expect(doneIndicator.innerHTML.trim()).toBe("Done");
        expect(button.innerHTML.trim()).toBe("Remove");
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between");
    })

    test('Should call Toggle Fn', () => {
        todo.done = true;

        render(
            <TodoListItem
                todo={todo}
                onHandleRemove={onRemoveFnMock}
                onToggleTodo={onToggleFnMock} />
        );
        const spanBtn = screen.getByLabelText('todo-indicator');

        fireEvent.click(spanBtn)

        expect(onToggleFnMock).toHaveBeenCalledWith(todo.id);
    })

    
    test('Should call Remove Fn', () => {
        render(
            <TodoListItem
                todo={todo}
                onHandleRemove={onRemoveFnMock}
                onToggleTodo={onToggleFnMock} />
        );
        const removeBtn = screen.getByRole("button")

        fireEvent.click(removeBtn)

        expect(onRemoveFnMock).toHaveBeenCalledWith(todo.id);
    })

})