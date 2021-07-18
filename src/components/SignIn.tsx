import React, { VFC } from "react";
import Button from './Button';
import Input from './Input';


const SignIn = (props: any) => {
  return (
      <div className="h-screen">
        <div className="SignIn ">
            <p className="text-center">サインイン</p>
            <Input
                inputName={'メールアドレス'}
                typeName={'email'}
            />
            <Input
                inputName={'パスワード'}
                typeName={'password'}
            />
            <Button
                bgClor={'blue'}
                txClor={'white'}
                btnName={'サインイン'}
                height={10}
            />
        </div>
    </div>
  )
}

export default SignIn;
