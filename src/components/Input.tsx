import React, { VFC } from 'react';


interface PROPS {
  inputName: string;
  typeName: string;
}

const Input = (props: any) => {
  return (
    <div className="text-center my-2">
      <input type={`${props.typeName}`} name="" value={`${props.inputName}`}　className={`w-9/12 text-left border-2 border-solid h-${props.height} text-base bg-${props.bgClor}-500 text-${props.txClor}`
        }>{ props.btnName }</input>
    </div>
  )
}

export default Input;
