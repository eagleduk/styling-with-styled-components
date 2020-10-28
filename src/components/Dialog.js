import React, {useState,useEffect}  from "react";
import styled, {css,keyframes} from "styled-components";
import Button from "./Buttton";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const sideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const sideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;


const DarkBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.8);

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${props => props.disapper && css`
        animation-name: ${fadeOut}
    `}
`;

const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;

    h3 {
        margin: 0;
        font-size: 1.5rem;
    }

    p {
        font-size: 1.125rem;
    }

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${sideUp};
    animation-fill-mode: forwards;

    ${props => props.disapper && css`
        animation-name: ${sideDown}
    `}
`;

const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
    &+& {
        margin-left: 0.5rem;
        margin-top: 0;
    }
`;


function Dialog({
    title,
    children,
    confirmText,
    cancelText,
    visible,
    onConfirm,
    onCancel
}) {

    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);

    useEffect(() => {
        if(localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false),250);
        }
        setLocalVisible(visible);
    }, [localVisible, visible])

    if(!animate && !localVisible) return null;

    return (
        <DarkBackground disapper={!visible}>
            <DialogBlock disapper={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <ShortMarginButton color="gray" onClick={onCancel}>{cancelText}</ShortMarginButton>
                    <ShortMarginButton color="pink" onClick={onConfirm}>{confirmText}</ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    )
};

Dialog.defaultProps = {
    cancelText: "취소",
    confirmText: "확인"
}

export default Dialog;