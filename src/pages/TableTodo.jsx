import {useContext} from "react";
import {TodoContext} from "../context/todoContext";


const TableTodo = ()=>{

    const {state , dispatch} = useContext(TodoContext);


    const manageDelete = id =>{
        dispatch({type: 'deleteTodo', payload: {id: id}})
    }

    const manageCheck = id =>{
        dispatch({type:'checkTodo' , payload:{id : id}})
    }

    return(
        <div>
            {
                state.map(item =>(
                    <div key={item.id}>
                        <input type={"checkbox"} onClick={()=>manageCheck(item.id)} checked={item.status}/>
                        <div>
                            {item.title}
                        </div>
                        <button onClick={() => manageDelete(item.id)}>
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    )
}


export default TableTodo;