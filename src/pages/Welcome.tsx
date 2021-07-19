import React, { useContext } from "react"
import { Link } from 'react-router-dom';

import { AuthContext } from "App"

// とりあえず認証済みユーザーの名前やメールアドレスを表示
export const Welcome: React.FC = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext)
  return (
        <div>
            <h1>welcome demo</h1>
            <li><Link to="/signin">サインイン</Link></li>
            <li><Link to="/signup">サインアップ</Link></li>
        {
            isSignedIn && currentUser ? (
                <>
                <h2>メールアドレス: {currentUser?.email}</h2>
                <h2>名前: {currentUser?.name}</h2>
                </>
            ) : (
            <></>
            )
        }
        </div>
  )
}
