

const initialState = [
    {
        id: 1,
        todo: 'Recollect soul stone',
        done: false
    }
]

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add-todo') {
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recollect dark stone',
    done: false
}

const addTodoAction = {
    type: '[TODO] Add TODO',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);
console.log(todos);