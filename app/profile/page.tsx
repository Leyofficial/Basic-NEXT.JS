import {getServerSession} from "next-auth";
import {authConfig} from "@/app/configs/auth";
import {Avatar} from "@mui/material";

export default async function ProfilePage(){
    const session = await getServerSession(authConfig);
    return (
        <div>
            <h1>Profile page</h1>
            <h2>{session?.user?.name}</h2>
            <Avatar sx={{width : '10rem' , height : '10rem'}} src={session?.user?.image ? session.user.image : ''}/>
        </div>
    )
}