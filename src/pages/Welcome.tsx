import React, { useContext } from "react"

import { AuthContext } from "App"

// とりあえず認証済みユーザーの名前やメールアドレスを表示
export const Welcome: React.FC = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext)
    console.log(isSignedIn)
    console.log(currentUser)
  return (
    <>
        <div className="conteiner">
            <h1>welcome demo</h1>
            <li><a href="/signin">サインイン</a></li>
            <li><a href="/signup">サインアップ</a></li>
        </div>
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
    </>
  )
}
