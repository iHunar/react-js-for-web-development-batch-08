import React from "react";
import { AiFillWarning ,AiFillCheckCircle} from "react-icons/ai";
// const Input = (props) => {
//     console.log("Input props >>>>, ", props)
//     return (
//         <div>
//             <p>{props.title}</p>
//             <input type={props.type} placeholder={props.placeholder} />
//         </div>
//     )
// }

const Input = ({ title, type, placeholder, value, onChange, name, message }) => {
    return (
        <div>
            <p>{title}</p>
            <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} />
            <AiFillWarning color="green" size={10} />
            <AiFillCheckCircle color="red" size={50}/>
            <p style={{ color: "red" }}>{message}</p>

        </div>
    )
}
export default Input