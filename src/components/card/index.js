import React from "react";
// 1
// const Card = ({name,index,email}) => {
//     return (
//         <div className="card" >
//             <p>Full Name :- {name} {index+1}</p>
//             <p>Email :- {email}</p>
//         </div>
//     )
// }


// 2
// const Card = ({index,item}) => {
//     return (
//         <div className="card" >
//             <p>Full Name :- {item.name} {index+1}</p>
//             <p>Email :- {item.email}</p>
//         </div>
//     )
// }


// 3
const Card = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => {
                return (
                    <div className="card"key={index} >
                        <p>Full Name :- {item.name} {index + 1}</p>
                        <p>Email :- {item.email}</p>
                    </div>
                )
            })}

        </div>
    )
}
export default Card