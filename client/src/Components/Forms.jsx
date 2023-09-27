import "./form.css";
import Input from "./Input";
import Textarea from "./Textarea";
import Buttons from "./Buttons";
import { useState } from "react";


const Forms=(props)=>{
    const {setList}=props
    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const handleName=(e)=>{
          setName(e.target.value);
    };
    const handleAddress=(e)=>{
        setAddress(e.target.value)
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name!==""&& address!==""){
            const note={name,address}
            setList((previousValue)=>
            ([...previousValue,note])
            )

            setName("")
            setAddress("")
            
        }
        else
        alert("inavlid input")
    
    }
    const handleReset=()=>{
        setName("")
        setAddress("")
    }
    return(
        <form className="form"onSubmit={handleSubmit} onReset={handleReset}>
            <div className="textpart">
                <Input 
                type="text"
                placeholder="enter your name"
                value={name}
                onChange={handleName}/>
                <Textarea
                placeholder="enter your address"
                value={address}
                onChange={handleAddress}/>
            </div>
            <div className="buttonsection">
                <Buttons type="submit"label="SAVE"onChange={handleSubmit}/>
                <Buttons type="reset"label="CANCEL"onChange={handleReset}/>
            </div>
        </form>
    )
}
export default Forms