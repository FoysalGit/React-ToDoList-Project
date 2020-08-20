import React,{useState} from "react";

function InputArea(props) {

    const [newItem , setItem] = useState("");
    function handleChange(e) {
        const value = e.target.value;
        setItem(value);
        
    }

    return(
        <div className="form">
            <input type="text" value={newItem} onChange={  handleChange} />
            <button onClick={ () => {props.onClicked(newItem); setItem("")}}>
                <span>Add</span>
            </button>
        </div>
        
    );
}

export default InputArea;