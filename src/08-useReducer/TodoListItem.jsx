import PropTypes from "prop-types";

export const TodoListItem = ({ todo, onHandleRemove, onToggleTodo }) => {
    const { id, description, done } = todo;
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span
                style={{ cursor: "pointer", color: "#333333" }}
                    onClick={() => onToggleTodo(id)}
                    className="user-select-none align-self-center fw-bold d-flex gap-2">
                    {description}
                    { done && (<span className="badge bg-success d-flex align-items-center">Done</span>) }
                </span>
                <button
                    onClick={() => onHandleRemove(id)}
                    className="btn btn-outline-danger rounded-5"> Remove </button>
            </li>
        </>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onHandleRemove: PropTypes.func,
    onToggleTodo: PropTypes.func
}