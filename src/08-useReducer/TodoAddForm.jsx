import PropType from "prop-types";
import { useForm } from "../hooks/useForm";

export const TodoAddForm = ({ handleAddTodo }) => {

    const { description, onResetForm, onInputChange } = useForm({ description: '' })

    function onAddTodo(event) {
        event.preventDefault();
        if (description.length) {
            handleAddTodo({ id: new Date().getTime(), description, done: false })
            onResetForm();
        }
    }

    return (
        <>
            <form className="d-flex flex-column gap-2">
                <input
                    required
                    name="description"
                    value={description}
                    onChange={onInputChange}
                    type="text"
                    placeholder="Description"
                    className="form-control" />

                <button type="submit" onClick={(event) => onAddTodo(event)} className="btn btn-outline-primary mt-2"> Add Todo </button>
            </form>
        </>
    )

}

TodoAddForm.propTypes = {
    handleAddTodo: PropType.func
}