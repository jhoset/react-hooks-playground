import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: false,
        hasError: null
    });


    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })
        setTimeout(async() => {
            const resp = await fetch(url);
            const data = await resp.json();
    
            setState({
                data,
                isLoading: false,
                hasError: null
            })
        }, 500)


    }

    useEffect(() => {
        getFetch();
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }

}