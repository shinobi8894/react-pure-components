import { StyledModal, Model, ModalWrapper } from "./styles/modal.style";

const Modal = ({ children, ...rest }) => {

    const { show, onClose } = rest;

    return (
        <ModalWrapper show={show}>
            <Model onClick={onClose}>
            </Model>
            <StyledModal {...rest}>
                {
                    children
                }
            </StyledModal>
        </ModalWrapper>
    )
}

export default Modal;