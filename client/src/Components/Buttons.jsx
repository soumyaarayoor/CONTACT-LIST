import  "./Buttons.css";

const Buttons=(props)=>{
    const {type,label,onchange}=props
    return(
        <button type={type} onChange={onchange}>{label}</button>
    )
}
export default Buttons