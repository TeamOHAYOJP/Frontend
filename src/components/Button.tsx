import React, { VFC } from 'react';

interface PROPS {
  bgClor: string;
  txClor: string;
  btnName: string;
  height: number;
}

const Button = (props: PROPS) => {
  return (
    <div className="text-center my-2">
      {/* ボタンcomponentsの作成、装飾はtailwind-css */}
      <button className={`w-9/12 h-${props.height} text-base text-center bg-${props.bgClor}-500 text-${props.txClor}`
        }>{ props.btnName }</button>
    </div>
  )
}

export default Button;
