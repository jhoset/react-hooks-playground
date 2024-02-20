import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"


describe('Tests on useForm', () => {
    const initialForm = {
        name: "Zero",
        email: "zero@gmail.com"
    }


    test('Should return default values', () => {

        const { result } = renderHook(() => useForm(initialForm))
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onResetForm: expect.any(Function),
            onInputChange: expect.any(Function)
        })
    })

    test('Should return updated property(name)', () => {
        const newName = "Fernando"
        const { result } = renderHook(() => useForm(initialForm));
        act(() => {
            const event = { target: { name: "name", value: newName } }
            result.current.onInputChange(event);
        })

        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName)
    })

    test('Should reset formState', () => {
        const newName = "Fernando"
        const { result } = renderHook(() => useForm(initialForm));
        act(() => {
            const event = { target: { name: "name", value: newName } }
            result.current.onInputChange(event);
            result.current.onResetForm();
        })

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.email).toBe(initialForm.email);
    })


})
