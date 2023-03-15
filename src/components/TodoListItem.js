import React from 'react';
import './TodoListItem.css';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoListItem = ({ todo, onDelete, onComplete }) => (

        <div className="todo">
            <div style={{ textDecoration: todo.completed && "line-through", fontSize:"24px" }}>
            {todo.text}
            </div>

            <div>
                <button
                    className={todo.completed ? `buttonCompleted` : `buttonComplete`}
                    onClick={() => onComplete(todo)}
                >
                    <CheckCircleIcon id="i" />
                </button>

                <button className="buttonDelete" onClick={() => onDelete(todo.id)}>
                    <DeleteIcon id="i" />
                </button>
            </div>
        </div>

    
);

export default TodoListItem;