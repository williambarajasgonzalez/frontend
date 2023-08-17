import email from "../assets/email.png"
import what from "../assets/what.png"
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Button from '@mui/material/Button';
import axios from "axios"
import React from 'react';
import ReactLoading from 'react-loading';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


export default function Footer(){
    const [disable,setDisable] = useState(false);
    const [emailMes,setEmail] = useState({
        name:'',
        email:'',
        message:''
    });

    const handleEmail = async(e) =>{
        e.preventDefault();
        const {name,email,message} = emailMes;
        setDisable(true);
        if(name == "" || email == "" || message ==""){
            setDisable(false);
            return toast.error('Completa todos los campos');
        }
        const messageEmail = await axios.post('/submit',emailMes);
        if(messageEmail.data.success){
            toast.success('Enviado');
            setEmail({
                name:'',
                email:'',
                message:''
            })
            return setDisable(false);
        }
    }

    
    const year = new Date().getFullYear();
    return(
        <footer className="w-full bg-white text-gray flex justify-center p-10 flex-col align-middle text-center">
            <Toaster />

                <label className="text-4xl text-gray-500">Contacts</label>
                    <div className="flex justify-center w-full align-middle text-center items-center gap-8 my-10 flex-col">
                        <img className="w-16" src={email} alt='email-icon'/>
                        <label className="text-gray-400">lvarado.mario19@hotmail.com</label>
                            <form onSubmit={(e)=>handleEmail(e)} className="flex w-full flex-col md:w-8/12 gap-3 items-center bg-blue-50 rounded-lg shadow-2xl p-4">
                                <labal className="text-lg text-gray-500">Tu nombre</labal>
                                <input value={emailMes.name} onChange={(e)=>setEmail({...emailMes,name:e.target.value})} className="w-full md:w-8/12" placeholder="Nombre..." type="text"/>
                                <label className="text-lg text-gray-500">Correo electrónico</label>
                                <input value={emailMes.email} onChange={(e)=>setEmail({...emailMes,email:e.target.value})} className="w-full md:w-8/12" placeholder="@com..." type="email"/>
                                <label className="text-lg text-gray-500">Mensaje</label>
                                <TextField id="outlined-multiline-static" className="w-full bg-white" label="Multiline" multiline rows={10}  value={emailMes.message} onChange={(e)=>setEmail({...emailMes,message:e.target.value})}/>
                                <Button type="submit" OnClick={(e)=>handleEmail(e)} disabled={disable && "true"} variant="contained">Enviar</Button>
                                {disable && <ReactLoading color="blue" type="cylon" />}
                            </form>
                    </div>
                    <div className="flex justify-center w-full align-middle text-center items-center gap-8 my-10">
                        <img className="w-16" src={what} alt='email-icon'/>
                        <label className="text-gray-400">+52 686 199 1183</label>
                    </div>
            <label className="text-gray-400">@ Todos los derechos reservados. Mario A -  {year}</label>
            <Link to='/secretpath' className='text-gray-50 p-2 hover:bg-gray-50 hover:text-white rounded-full'> </Link>
        </footer>
    );
}
