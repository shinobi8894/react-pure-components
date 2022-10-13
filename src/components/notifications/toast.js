import { useTimeout } from "hooks/useTimeout"
import { ToastContent, ToastContainer } from "./styles/notify.style";

export const Toast = (props) => {
    
    useTimeout(props.close, 5000);

    return (
        <ToastContainer className="toast">
            <ToastContent className="toast__text">{props.children}</ToastContent>
        </ToastContainer>
    )
}