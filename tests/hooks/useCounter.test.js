import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe("Tests on useCounter", () => {

    test("Should return default values", () => {

        const { result, } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(0);
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })

    test("Should generate counter with 100 as default value", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(100);
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })

    test("Should increment counter", () => {
        const { result } = renderHook(() => useCounter(0));
        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment(2);

        })
        expect(result.current.counter).toBe(3)
    })

    test("Should decrement counter", () => {
        const { result } = renderHook(() => useCounter(3));
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);

        })
        expect(result.current.counter).toBe(0)
    })

    test("Should reset counter", () => {
        const { result } = renderHook(() => useCounter(0));
        const { counter, increment, decrement,reset } = result.current;

        act(() => {
            increment(2)
            decrement(1)
            reset()

        })
        expect(result.current.counter).toBe(0)
    })


})