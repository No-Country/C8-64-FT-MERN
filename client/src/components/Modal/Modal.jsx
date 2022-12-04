import "./Modal.css"

function Modal({children, isOpen, closeModal}) {
    return ( 
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
  
        <div className="modal-container container" onClick={(e)=>e.stopPropagation()}>
          
          {children}

        </div>
      </article>
     );
}

export default Modal;