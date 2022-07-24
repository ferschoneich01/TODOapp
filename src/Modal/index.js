import React from "react";
import ReactDOM from "react-dom";
import { TodoForm } from "../TodoForm";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div class="modal" id="ModalAdd" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Agregar nuevos Todos</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <TodoForm />
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("modal")
  );
}

export { Modal };
