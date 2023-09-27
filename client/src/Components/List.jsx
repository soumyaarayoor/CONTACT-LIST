const List=(props)=>{
const {list}=props

return(
    <table>
        <thead>
          
                 <tr>
                 <th>NAME</th>
                 <th>ADDRESS</th>
                 </tr>
           
        </thead>
        <tbody>
            {list.map((lists)=>(
               <tr>
               <td>{lists.name}</td>
               <td>{lists.address}</td>
           </tr> 
            ))}
        
        </tbody>
    </table>
)
}

export default List