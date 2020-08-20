import React from "react";

function InputArea(props) {
    return(
        <div className="form">
            <input value={props.value} type="text" onChange={props.onChanged} />
            <button onClick={props.onClicked}>
                <span>Add</span>
            </button>
        </div>
        
    );
}

export default InputArea;