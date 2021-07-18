import React, { VFC } from "react";
import Button from 'components/Button';
import Input from 'components/Input';


const SignUp:VFC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">

                    <h4>サインアップ</h4>

                </div>
                <div className="mb-4">

                    <Input placeholder="ユーザー名"/>

                </div>
                <div className="mb-4">

                    <Input placeholder="メールアドレス"　/>

                </div>
                <div className="mb-4">

                    <Input placeholder="パスワード"/>

                </div>
                <div className="mb-6">

                    <Input placeholder="パスワード(確認)"/>

                </div>
                <div className="flex items-center justify-between">

                    <Button innerText={'登録'}/>

                </div>
            </form>
        </div>
    </div>
    
  )
}

export default SignUp
