import React from "react";
import { useEffect, useState } from "react";
import popupStyles from "./modal.css";
const Modal = (props: any) => {
    const [show, setShow] = useState(false);

    const closeHandler = () => {
        setShow(false);
        props.onClose(false);
    };

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (
        <div
            style={{
                visibility: show ? "visible" : "hidden",
                opacity: show ? "1" : "0"
            }}
            className={popupStyles.overlay}
        >
            <div className={popupStyles.popup}>
                <h2>{props.title}</h2>
                <span className={popupStyles.close} onClick={closeHandler}>
                    &times;
                </span>
                <div className={popupStyles.content}>{props.children}</div>
            </div>
        </div>
    );
};

export default Modal;
