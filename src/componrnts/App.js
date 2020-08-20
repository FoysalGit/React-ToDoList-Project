import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

    
    const [listItems, setNewItem] = useState([]);

    

    function handleClick(newItem) {
        setNewItem(prevItems => [...prevItems, newItem]);
        
    } 
    
    function deleteItem(id) {
     setNewItem(prevItems => prevItems.filter((prevItem, index) => id !== index)); 
    }

    return( 
        <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea onClicked={handleClick} />
      <div>
        <ul>
          {listItems.map((oneItem, index) => <ToDoItem key={index} id={index} onChecked={deleteItem} item= {oneItem}/>)}
          
        </ul>
      </div>
    </div>
  );
}

    

export default App;