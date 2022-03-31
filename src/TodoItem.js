import React from "react";
import './TodoItem.css';
function TodoItem(props){
    return (
        <li>
            <span className="btn">
                <button>x</button>
            </span>
            <span className="title">
                title
            </span>
            <p>{props.text}</p>
        </li>
    );
}

export { TodoItem };