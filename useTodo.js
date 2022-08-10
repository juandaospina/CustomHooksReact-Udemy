import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/useReducer/todoReducer";


const init = () => {
    return JSON.parse( localStorage.getItem('TODOS') )
}


export const useTodo = (initialArg = []) => {
    
    const [ state, dispatch ] = useReducer( todoReducer, initialArg, init );

    const handleNewTodo = (todo) => {
        dispatch({
            type: '[TODO]: Add Todo',
            payload: todo
        });
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO]: Delete Todo',
            payload: id
        });
    }

    const handleCompletedTodo = (id) => {
        dispatch({
            type: '[TODO]: Completed Todo',
            payload: id
        });
    }

    const handleAllPendingTodos = state.filter( todo => !todo.done ).length

    const counterTodos = state.length


    useEffect(() => {
        localStorage.setItem( 'TODOS', JSON.stringify( state ) )
    }, [state]);


    return {
        state,
        handleNewTodo,
        handleDeleteTodo,
        handleCompletedTodo,
        counterTodos,
        handleAllPendingTodos
    }
}