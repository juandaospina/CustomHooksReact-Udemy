import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [ state, setState ] = useState({
        data: null,
        loading: true,
        hasError: null 
    });

    const getResultsApi = async () => {

        setState({
            ...state,
            loading: true,
        });

        const response = await fetch(url);
        const data = await response.json()

        setState({
            data: data,
            loading: false,
            hasError: null
        });

    }
    
    useEffect(() => {
        getResultsApi();
    }, [ url ])
    

    return {
        data: state.data,
        loading: state.loading,
        hasError: state.hasError
    }
} 