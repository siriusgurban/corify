import React, {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface ICustomModal {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit: () => void;
  content: ReactNode;
  title?: string;
  is_question_modal?: boolean;
}

interface ICustomModalV2 {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit: () => void;
  content?: ReactNode;
  title: string;
  is_question_modal?: boolean;
}

type ICustomModalUnion = ICustomModal | ICustomModalV2;

const CustomModal: React.FC<ICustomModalUnion> = (props) => {
  return (
    <div
      onClick={() => props.setModalIsOpen(false)}
      className={`customModal ${props.modalIsOpen ? "active" : ""}`}
    >
      <div
        className="modalBox"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalHead">
          <h2>{props.title || ""}</h2>
          <span onClick={() => props.setModalIsOpen(false)}>X</span>
        </div>
        <div className="content">{props.content}</div>
        {props.is_question_modal && (
          <div className="btnGroup">
            <button
              className="btn cancel"
              onClick={() => props.setModalIsOpen(false)}
            >
              Cancel
            </button>
            <button className="btn" onClick={props.onSubmit}>Ok</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomModal;
