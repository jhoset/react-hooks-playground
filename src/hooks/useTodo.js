import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const onHandleRemove = (id) => {
        const action = {
            type: '[TODO] REMOVE-TODO',
            payload: id
        }
        dispatch(action);
    }
    const onHandleAddTodo = (todo) => {
        const action = {
            type: '[TODO] ADD-TODO',
            payload: todo
        }
        dispatch(action);
    }

    const onHandleToggleTodo = (id) => {
        const action = {
            type: '[TODO] TOGGLE-TODO',
            payload: id
        }
        dispatch(action);
    }

    return {
        todos,
        onHandleAddTodo,
        onHandleRemove,
        onHandleToggleTodo,
        allTodos: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length ?? 0,
    }
}