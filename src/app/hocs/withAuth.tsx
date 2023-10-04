
import { AuthGuard } from "@/entities/auth/ui";
import { useSidebarQuery } from "@/entities/sidebar/api";
import { FC } from "react";

const withAuth = (Component: FC) => (props:any) => {
    const isAuthorized = useSidebarQuery();
    console.log(isAuthorized, '!!!!')

    return(<AuthGuard isAuthorized={false}>{<Component {...props}/>}</AuthGuard>)
}

export default withAuth;