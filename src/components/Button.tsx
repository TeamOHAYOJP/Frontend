import React, { VFC } from 'react';

interface PROPS {
    bgColor?  : string;
    textColor?: string;
    innerText?: string;
    type?     : "button" | "submit" | "reset" | undefined
}

const Button = (props: PROPS) => {
    return (
        <button 
            className={`
                bg-${props.bgColor || "blue"}-400 
                hover:bg-${props.bgColor || "blue"}-600 
                text-${props.textColor || "white"} 
                font-bold 
                py-2 
                px-4 
                rounded 
                focus:outline-none 
                focus:shadow-outline
            `} 
            type={props.type || "button"}
        >
            {props.innerText || ""}
        </button>
    )
}


export default Button;
