import client from "./client";


export const getUser = (id:number) => {

    return client.get(`/users/${id}`)

}

