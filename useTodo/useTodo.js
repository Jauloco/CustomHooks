import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init =() => {
    return JSON.parse( localStorage.getItem('todos')  || [])
}

export const useTodo = () => {

     const [ todos , dispatch ] = useReducer( todoReducer , [],  init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify( todos ) )

    },[todos]);

    const handleNewTodo =( todo ) => {
        const action ={
            type: 'Agregar',
            payload: todo,
        }

        dispatch( action ); 

    }
    
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: 'Remover',
            payload: id,
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: 'Toggle',
            payload: id,
        });
    }
    
    const getTodosDone = (todos) => {
        return todos.filter( todo => todo.done).length
    }

    const getTodosCount = ( todos ) => {
        return todos.length;
    }
    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        TodosCount: getTodosCount(todos),
        TodosDone: getTodosDone(todos)
    }
}