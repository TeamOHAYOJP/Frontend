import React, { VFC } from "react";
import Button from '../components/Button';
import Input from '../components/Input';

interface PROPS {

}

const SignUp = (props: any) => {
  return (
      <div className="h-screen">
        <div className="SignUp ">
            <p className="text-center">サインアップ</p>
            <Input
                inputName={'メールアドレス'}
                typeName={'email'}
            />
            <Input
                inputName={'パスワード'}
                typeName={'password'}
            />
            <Input
                inputName={'ユーザー名'}
                typeName={'text'}
            />
            <Button
                bgClor={'blue'}
                txClor={'white'}
                btnName={'登録'}
                height={10}
            />
        </div>
    </div>
  )
}

export default SignUp;
