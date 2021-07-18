import React, { VFC } from 'react';


interface PROPS {
    placeholder?: string;
    type?: string;
}

const Input = (props: PROPS) => {
    return (
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={props.type || "text"}
            placeholder={props.placeholder || ""}
        />
    )
}

/* {<input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
}<p className="text-red-500 text-xs italic">Please choose a password.</p> */

export default Input;
