
export const todoReducer = ( initialState, action ) => {
    switch (action.type) {
        case 'Agregar':
            return [ ...initialState,action.payload]
        case 'Remover':
            return initialState.filter( todo => todo.id != action.payload );
        case 'Toggle':
            return initialState.map( todo => {
                if (todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }
}