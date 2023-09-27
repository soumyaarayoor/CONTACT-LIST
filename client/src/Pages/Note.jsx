import { useState } from "react";
import "./Note.css";
import Forms from "../Components/Forms";
import List from "../Components/List";

function Note() {
    const [list,setList]=useState([])
    return (
        <div classname="note">
            <div className="dataentry">

                <Forms setList={setList} />
            </div>
            <div className="list">
               <List list={list}/>
            </div>
        </div>);
}

export default Note;