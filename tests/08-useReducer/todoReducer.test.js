import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Tests on todoReducer', () => {

    const initialState = [{
        id: 1,
        description: "Demo TODO",
        done: false
    }]

    test('Should return initial state ', () => {

        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState);

    })

    test('Should add new TODO ', () => {
        const action = {
            type: '[TODO] ADD-TODO',
            payload: {
                id: 2,
                description: "Second Todo",
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    })

    test('Should remove existing TODO', () => {
        const action = {
            type: "[TODO] REMOVE-TODO",
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })

    test("Should Toggle DONE flag of TODO", () => {
        const action = {
            type: "[TODO] TOGGLE-TODO",
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    })

})
