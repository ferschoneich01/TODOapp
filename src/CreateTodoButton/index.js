import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };
  return (
    <button
      className="TodoButton"
      onClick={onClickButton}
      data-bs-toggle="modal"
      data-bs-target="#ModalAdd"
    >
      +
    </button>
  );
}

export { CreateTodoButton };
