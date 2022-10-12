
const TodoReducer = (state , action)=>{
    const {type , payload} = action;

    switch (type){
        case 'addTodo':
            return[...state , payload]
        case 'deleteTodo':
            return state.filter(item => item.id !== payload.id)
        case 'editTodo':
            return state.map(item => item.id === payload.id ? payload : item)
        case 'checkTodo':
            return state.map(item => item.id === payload.id ? {...item , status: !item.status} : item)
        default:
            return state
    }
}


export default TodoReducer;