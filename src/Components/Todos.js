import React from 'react'
import TodoItem from './TodoItem.js';

export default function Todos(props) {

    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className='container my-3' style={{ myStyle }}>
            <h3 className='text-center'>My Todo List</h3>
            {/* {props.todos} */}
            {props.todos.length === 0 ? 'No Todos to display' :
                props.todos.map((todo) => {
                    return (
                        <>

                            <TodoItem todo={todo} onDelete={props.onDelete} /><hr />

                        </>
                    )
                })
            }
        </div>
    )
}
