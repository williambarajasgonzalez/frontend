import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Blog(){
    const {id} = useParams();
    const [blog,setBlog] = useState([])
    const navigate = useNavigate();

    const handlePost = async() =>{
        const post = await axios.post('/id',{id:id});
        if(post.data.success){
            setBlog(post.data.success);
        }else{
            return;
        }
    }

    const handleNav = () =>{
        navigate('/secretpath');
    }

    useEffect(()=>{
        handlePost()
    },[])
    return(
        <>
        <Header />
        <div className="w-full h-full bg-blue-50 flex flex-col justify-center items-center gap-10 p-10">

            <ArrowBackIosIcon fontSize='large' className="p-1 hover:bg-blue-400 rounded-lg" onClick={()=>handleNav()} />
                <div className="flex gap-4 text-gray-600 text-lg">
                    <label>{blog.time}</label>
                    <label>{blog.date}</label>
                </div>
                <label className="p-2 text-3xl font-bold">{blog.name}</label>
                <label className="text-gray bg-green-100 p-3 rounded-lg">{blog.email}</label>
                <label className="bg-white rounded-md p-3 w-9/12 h-full" >{blog.message}</label>
            </div>
        </>
    );
}