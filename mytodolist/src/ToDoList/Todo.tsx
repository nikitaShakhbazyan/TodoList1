import React, {useState} from 'react'
import styled from 'styled-components';


interface item {
    id: number;
    text:string;
    completed:boolean;
}

const Todo : React.FC = () => {
    const [todos, setTodos] = useState<item[]>([])
    const [input, setInput] = useState<string>('')


    const handleToggle = (id:number) =>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id=== id){
                    return {...todo,completed: !todo.completed};
                }
                return todo;
            })
        )
    }

    const handleClick = () =>{
        const newtTodo:item = {id:Date.now(),text:input,completed:false}
        setTodos([...todos,newtTodo])
        setInput('')
        console.log(todos)
    }

  return (
    <StyledMainDiv>
        <StyledDiv>
        <h1>Todo List</h1>
        <ul>
        {todos.map((todo)=> (

            <li key={todo.id} onClick={()=>handleToggle(todo.id)} >{todo.text}
            </li>

        ))}
        </ul>
        <input value={input} type="text" placeholder='Add todo item' onChange={(e)=>setInput(e.currentTarget.value)}/>
        <button onClick={handleClick}>Add</button>
        </StyledDiv>
    </StyledMainDiv>
  )
}

export default Todo



const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
    width:60%;
    background-color: bisque;
    padding: 16px;
    border: 1px solid gray;
`;

const StyledMainDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
`
