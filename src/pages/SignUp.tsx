import React, { VFC } from "react";
import Button from '../components/Button';


interface PROPS {

}

const SignUp = (props: any) => {
  return (
    <div className="Button">
        <Button
            bgClor={'blue'}
            txClor={'white'}
            btnName={'登録'}
            height={10}
        />
        <Button
            bgClor={'blue'}
            txClor={'white'}
            btnName={'登録'}
            height={10}
        />
        <Button
            bgClor={'blue'}
            txClor={'white'}
            btnName={'登録'}
            height={10}
        />
    </div>
  )
}

export default SignUp;
