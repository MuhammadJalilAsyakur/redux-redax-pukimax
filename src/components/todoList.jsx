import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo, getTodo } from '../redux/reducers/todo-reducers'
import todoReducers from '../redux/reducers/todo-reducers'

function TodoList() {
    const dispatch = useDispatch()
    const {isLoading , todos} = useSelector(state => state.todo)
    const [input, setInput] = useState('')
    
    console.log(isLoading, todos);

    useEffect(() => {
        dispatch(getTodo())
    }, []);


    const handleCLick = (e) => {
        e.preventDefault()
        let newTodo = {
            value: input,
            status: false
        }
        dispatch(addTodo (newTodo))
    }

    return (
        <div>
            <form>
                <input type="text" name='' id=''
                value={input} 
                onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleCLick}>add</button>
            </form>

            <div>
                {isLoading ?  <h1>Loading...</h1> :
                <div>
                    {todos.map((todo) => {
                        return <div key={todo.id}>
                            <p>{todo.value}</p>
                            <p>{todo.status}</p>
                        </div>
                    })}
                </div>
                    }
            </div>
        </div>
    )
}

export default TodoList
