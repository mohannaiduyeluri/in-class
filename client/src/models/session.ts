
import router from "../router";
import { reactive } from "vue";

import * as users  from "../models/user";


const session = reactive({
    user: null as  users.User | null,
});

export async function Login(handle: string, password: string) {
    const user = users.list.find(u => u.handle === handle);

    if(!user){
        throw {message:"User not found"};
    }
    if(user.password !== password){
        throw {message:"Incorrect password"};
    }
    
    session.user = user;
    router.push('/messages');
}

export function logout(){

}
    
export default session;