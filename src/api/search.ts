import client from "./axios.config"

export const searchUser=(name:string)=>{
    return client.get(`/search/users?q=${name}`)
}