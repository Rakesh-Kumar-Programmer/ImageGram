import user from "../schema/user";
import user from "../schema/user";

export const findUserByEmail = async (email)=> {
    try {
        const user = await user.findone({email});
        return user;
    } catch (error) {
        console.log(error);
        
    }
}