import "./textarea.css";
const Textarea=(props)=>{
    const {placeholder,value,onChange}=props
    return(
        <textarea placeholder={placeholder} value={value}onChange={onChange}></textarea>
    )
}

export default Textarea