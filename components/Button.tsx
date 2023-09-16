import {MouseEventHandler} from "react";

interface props {
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean | undefined
    callback: MouseEventHandler<HTMLButtonElement> | undefined
    content: string
}

const Button = (props: props) => {
    return (<button type={props.type} disabled={props.disabled} onClick={props.callback}
                    className={`disabled:bg-gray-100 disabled:text-gray-300 enabled:bg-blue-600 enabled:text-white border-2 rounded-3xl p-3 min-w-full tracking-tighter font-bold `}>
            {props.content}
        </button>);
};

export default Button;