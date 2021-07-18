import { VFC } from 'react'

export const  Welcome: VFC = () =>{
    return(
        <div className="conteiner">
            <h1>welcome demo</h1>
            <li><a href="/signin">サインイン</a></li>
            <li><a href="/signup">サインアップ</a></li>
        </div>
    )
}