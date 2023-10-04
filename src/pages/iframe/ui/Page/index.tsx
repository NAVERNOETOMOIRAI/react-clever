import { useLoaderData } from "react-router-dom"
import './styles.scss'; 

export const Iframe = () => {
    const {url}:any = useLoaderData()
    return <iframe className='iframe'    src={url}></iframe>
}