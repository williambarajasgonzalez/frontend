import Header from "../Components/Header"
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import Message from "../Components/Message";

export default function SecretPath(){
    const [emails,setEmails] = useState([]);

    const getData = async() =>{
        const data = await axios.get('/data');
        if(data.data.success){
             await setEmails(data.data.success);
             return console.log(emails)
        }else{
            return;
        }
    }

    const filter = async(i) =>{
        const newFilter = await emails.filter(x=> x._id != i);
        await setEmails(newFilter);
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <>
            <div className=" w-full h-full">
                <Header />
                <div className="flex flex-wrap gap-10 w-full h-full p-6 justify-center">
                    {emails?.length && 
                       emails.map((x,index)=>{
                        return(
                            <Message id={x._id} name={x.name} email={x.email} message={x.message} time={x.time} date={x.date} filter={filter} />
                        );
                       })
                    }
                </div>
            </div>
        </>
    );
}