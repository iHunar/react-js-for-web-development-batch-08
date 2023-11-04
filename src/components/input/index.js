import React from "react";
import { AiFillWarning, AiFillCheckCircle } from "react-icons/ai";
// const Input = (props) => {
//     console.log("Input props >>>>, ", props)
//     return (
//         <div>
//             <p>{props.title}</p>
//             <input type={props.type} placeholder={props.placeholder} />
//         </div>
//     )
// }

const Input = ({
    title,
    type,
    placeholder,
    value,
    onChange,
    name,
    message,
    icon,
    isDone,
    vStart,
}) => {
    console.log("vStart", vStart);
    console.log("isDone", isDone);
    return (
        <div>
            <p>{title}</p>
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
            {icon && (
                <>
                    {vStart ? (
                        isDone ? (
                            <AiFillCheckCircle color="green" />
                        ) : (
                            <AiFillWarning color="red" />
                        )
                    ) : null}
                </>
            )}
            <p style={{ color: "red" }}>{message}</p>
        </div>
    );
};
export default Input;
