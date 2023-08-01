import React  from "react";

const Button =({styles})=>{
    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient rounded-md font-poppins font-medium
        text-[18px] text-primary outline-none ${styles}`}>
            Get Started
        </button>
    )
}


export const Button2 =({styless})=>{
    return (
        <button type="button" className={`mx-2 py-3 px-5 rounded-md bg-blue-gradient font-poppins font-medium
        text-[18px] text-primary outline-none ${styless}`}>
            Login
        </button>
    )
}





export default Button;

