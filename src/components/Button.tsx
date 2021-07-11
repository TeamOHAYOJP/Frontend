import React, { VFC } from 'react';

interface PROPS {
  name: string;
  age: number;
  id: number;
}

const Button = (props: PROPS) => {
  const { name, age, id } = props
  return (
    <div className="bg-${bgColor}-500">

    </div>
  )
}

export default Button;
