import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Message(props){
    const navigate = useNavigate();
    const id = props.id;
    const short = props.message.slice(0,20)+'...';
    const handleNavigate = () =>{
        navigate(`/${id}`);
    }
    const handleTrash = async() =>{
        const post = await axios.post('/delete',{delete:id});
        if(post.data.success){
            toast.success(post.data.success);
            props.filter(id);
            return;
        }
        if(post.data.error){
            toast.error(post.data.error);
            return;
        }
        if(!post){
            return;
        }
    }   
    return(
        <> 
            <Toaster />
            <div onClick={()=>handleNavigate()} className="flex flex-col justify-center w-64 h-56 items-center gap-2 bg-gray-200 rounded-3xl shadow-2xl cursor-pointer hover:bg-blue-200 hover:shadow-transparent">
                <div onClick={()=>handleNavigate()} className="flex gap-4 text-gray-600 text-sm">
                    <label onClick={()=>handleNavigate()}>{props.time}</label>
                    <label onClick={()=>handleNavigate()}>{props.date}</label>
                </div>
                <label onClick={()=>handleNavigate()} className="p-2 text-2xl font-bold">{props.name}</label>
                <label onClick={()=>handleNavigate()} className="text-gray">{props.email}</label>
                <label onClick={()=>handleNavigate()} className="rounded-md p-3 w-9/12 h-10 flex items-center align-middle" >{short}</label>
            </div>
            <DeleteIcon onClick={handleTrash} fontSize="large" className="hover:bg-red-400 rounded-full relative right-10"/>
        </>
    );
}