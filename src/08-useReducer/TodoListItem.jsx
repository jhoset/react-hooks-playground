import PropTypes from "prop-types";

export const TodoListItem = ({ todo, onHandleRemove, onToggleTodo }) => {
    const { id, description, done } = todo;
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span
                    aria-label="todo-indicator"
                    style={{ cursor: "pointer", color: "#333333" }}
                    onClick={() => onToggleTodo(id)}
                    className="user-select-none align-self-center fw-bold d-flex gap-2">
                    {description}
                    {done && (<span className="badge bg-success d-flex align-items-center">Done</span>)}
                </span>
                <button
                    onClick={() => onHandleRemove(id)}
                    className="btn btn-outline-danger rounded-5"> Remove </button>
            </li>
        </>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onHandleRemove: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
}