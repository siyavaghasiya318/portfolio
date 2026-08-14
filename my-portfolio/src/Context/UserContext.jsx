import { createContext, useState } from "react";
import axios from "axios"
import { toast } from "react-hot-toast";
export const userContax = createContext()

// const API = "http://localhost:5000/api"
const API = "https://portfolio-r05h.onrender.com/api"

export const UserProvider = ({ children }) => {

    const[load,setLoad] = useState(false)

    const [sendContact, setSendContact] = useState({
        name: "",
        email: "",
        message: ""
    })

    const HandleChange = (e) => {
        const { name, value } = e.target        
        setSendContact({
            ...sendContact,
            [name]: value
        })
    }

    const submitContactForm = async (e) => {
        e.preventDefault()
        setLoad(true)
        try {
            const { data } = await axios.post(`${API}/contact/detail`, sendContact)
            console.log(data.message);
            toast.success(data.message)
            setSendContact({
                name: "",
                email: "",
                message: ""
            })

            setLoad(false)
        } catch (error) {
            console.log("submitContact error", error);
            toast.error(error?.response?.data?.message || "something went wrong");
        }finally{
            setLoad(false)
        }
    }

    return (
        <userContax.Provider value={{ HandleChange,load, submitContactForm, sendContact }}>
            {children}
        </userContax.Provider>
    )
}