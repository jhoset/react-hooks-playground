import { TodoListItem } from "./TodoListItem"
import PropTypes from "prop-types";

export const TodoList = ({ todos, onHandleRemove, onToggleTodo }) => {

    return (
        <>
            <ul className="list-group">
                {
                    todos.map(todo => (
                        <TodoListItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo}  onHandleRemove={onHandleRemove} />
                    ))
                }

            </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onHandleRemove: PropTypes.func
}