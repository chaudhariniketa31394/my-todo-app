import React, { useState } from 'react'

export default function AddTodo(props) {
    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('title or Description cannot be null');
        }
        props.addTodo(title, desc)
        title = ''
        desc = ''

    }
    return (
        <div className='container'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}
                        className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Sumit</button>
            </form>
        </div>
    )
}
