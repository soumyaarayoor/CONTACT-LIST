
import "./input.css";
const Input=(props)=>{
    const {type,placeholder,onChange,value}=props
    return(

        <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        
    )
}
export default Input