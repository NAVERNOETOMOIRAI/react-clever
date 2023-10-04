import { Layout } from "@/shared/ui";
import { ReactNode } from "react";

type Props = {
    isAuthorized: boolean;
    children: ReactNode;
  };
  
export const AuthGuard = (props: Props) => {
    const { isAuthorized, children } = props;

    if(!isAuthorized) return( <Layout
        withSpinner
        withLayoutWrapperHeader="Идёт процесс авторизации..."
    />)

    return <> {children} </>;
}