import { createContext, useState } from "react";
import axios from "axios"
import { toast } from "react-hot-toast";
export const userContax = createContext()

export const UserProvider = ({children}) => {

    // const APi = "http://localhost:5000/api",
    const API = "https://portfolio-mu-sooty-65.vercel.app",
    const[sendContact,setSendContact] = useState({
        name:"",
        email:"",
        message:""
    })
    
    const HandleChange = (e) =>{
       const{name,value} = e.target
        setSendContact({
            ...sendContact,
            [name]:value
        })
    }

    const submitContactForm = async(e) => {
        e.preventDefault()
        
        try {
            const{data} = await axios.post(`${API}/contact/detail`, sendContact)
            console.log(data.message);
            toast.success(data.message)

            setSendContact({
                name:"",
                email:"",
                message:""
            })
            
        } catch (error) {
            console.log("submitContact error", error);
            toast.error(error?.response?.data?.message   );
        }
    }

    return(
        <userContax.Provider value={{HandleChange,submitContactForm,sendContact}}>
            {children}
        </userContax.Provider>
    )
}