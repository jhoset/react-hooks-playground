import { TodoList } from "./TodoList";
import { TodoAddForm } from "./TodoAddForm";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {


    const { todos, allTodos, pendingTodos, onHandleAddTodo, onHandleRemove, onHandleToggleTodo } = useTodo();

    return (
        <>
            <h1> Todo App ({allTodos}) - Pending: {pendingTodos} </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <h4>List</h4>
                    <hr />
                    <TodoList todos={todos} onHandleRemove={onHandleRemove} onToggleTodo={onHandleToggleTodo} />
                </div>

                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    <TodoAddForm handleAddTodo={onHandleAddTodo} />
                </div>
            </div>

        </>
    )

}