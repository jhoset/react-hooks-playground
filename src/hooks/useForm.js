import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const onResetForm = () => {
        const formStateClone = JSON.parse(JSON.stringify(formState));
        Object.keys(formState).forEach(key => {
            formStateClone[key] = ''
        })
        setFormState(initialForm)
    }


    return {
        ...formState,
        onResetForm,
        formState,
        onInputChange,
    }

}