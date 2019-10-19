export const initialState = [{
    item: "workout",
    completed: false, 
    id: 1
}]

export function reducer(state, action){
    switch (action.type ){
        case "ADD_ITEM":
            return [
                ...state, {item: action.payload, completed: false, id: Date.now()}
            ];
        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            });
        case "CLEAR":
            return state.filter(todo => !todo.completed)

    default: 
        return state;
    }
}