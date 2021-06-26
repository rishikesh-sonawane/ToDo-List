import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3 className="text-center my-3">Add a Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3 clr">
                    <label htmlFor="title" className="form-label">Task Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Add a Title" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" placeholder="Now Describe it!" />
                </div>
                <button type="submit" className="btn btn-sm btn-dark">Add Task</button>
            </form>
        </div>
    )
}
