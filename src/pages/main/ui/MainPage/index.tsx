import {useLoaderData,
} from "react-router-dom";
export const MainPage = (props:any) => {
    const data = useLoaderData()
    console.log(data, '!!')
    return (<div>123mainpage</div>)
}