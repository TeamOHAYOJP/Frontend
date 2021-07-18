import React, { VFC } from "react";
import Button from 'components/Button';
import Input from 'components/Input';


const SignIn:VFC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">

                    <h4>サインイン</h4>

                </div>
                <div className="mb-4">

                    <Input placeholder="メールアドレス"　/>

                </div>
                <div className="mb-4">

                    <Input placeholder="パスワード"/>

                </div>
                <div className="flex items-center justify-between">

                    <Button innerText={'サインイン'}/>

                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn;
