import React from "react";
// const Input = (props) => {
//     console.log("Input props >>>>, ", props)
//     return (
//         <div>
//             <p>{props.title}</p>
//             <input type={props.type} placeholder={props.placeholder} />
//         </div>
//     )
// }

const Input = ({ title, type, placeholder }) => {
    return (
        <div>
            <p>{title}</p>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}
export default Input