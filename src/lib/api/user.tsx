import client from "./client";
import { UpdateUserFormData } from 'interfaces/index'

export const getUser = (id:number | undefined) => {

    return client.get(`/users/${id}`)

}

export const updateUser = (id: number | undefined | null, data: UpdateUserFormData) => {

    return client.put(`/users/${id}`, data)

}