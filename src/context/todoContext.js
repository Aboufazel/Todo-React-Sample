import TodoReducer from "../reducer/todo.reducer"
import {useReducer , createContext} from "react";


// todocontext is mutable
export const TodoContext = createContext({
    state:[] , dispatch :()=>{

    }
})

const TodoProvider = ({children})=>{
    const [state , dispatch] = useReducer(TodoReducer , [{id:1 , title:"complete phone book pract" , status:false}])
    return(
        <TodoContext.Provider value={{
            state,
            dispatch,
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export default TodoProvider;