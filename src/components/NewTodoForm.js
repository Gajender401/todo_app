import React, { useState } from 'react';
import './NewTodoForm.css';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function NewTodoForm({ todos, email }) {
    const [inputValue, setInputValue] = useState('');

    async function addTodo() {
        const isDuplicateText =
            todos.some(todo => todo.text === inputValue);
        if (!isDuplicateText) {
            if (inputValue !== "") {
                await addDoc(collection(db, email), {
                    text: inputValue,
                    completed: false,
                });
            }else{
                alert("Please Enter something.")
            }
            setInputValue('');
        }

    }

    return (
        <div className="new_todo_form">
            <input
                className="new_todo_input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button
                onClick={() => addTodo()}
                className="new_todo_button">
                Create Todo
            </button>
        </div>
    );
};


export default NewTodoForm;