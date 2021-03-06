import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <button class="btn-close" onClick={props.onDelete}></button>
      <svg
        className={`check Icon-check ${
          props.completed && "Icon-check--active"
        }`}
        onClick={props.onComplete}
        role="img"
        focusable="false"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <path d="M13 4.1974q0 .3097-.21677.5265L7.17806 10.329l-1.0529 1.0529q-.21677.2168-.52645.2168-.30968 0-.52645-.2168L4.01935 10.329 1.21677 7.5264Q1 7.3097 1 7t.21677-.5265l1.05291-1.0529q.21677-.2167.52645-.2167.30968 0 .52645.2167l2.27613 2.2839 5.07871-5.0864q.21677-.2168.52645-.2168.30968 0 .52645.2168l1.05291 1.0529Q13 3.8877 13 4.1974z" />
      </svg>

      <p className={`${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
    </li>
  );
}

export { TodoItem };
