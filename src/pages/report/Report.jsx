import React, { useState } from "react";
import "./Report.scss";

const Form = () => {

  const [items, setItems] = useState([{ size: "", price: "", quantity: "" }]);

  const handleAddItem=()=>{
    setItems([...items,{size: "", price: "", quantity: "" }]);
  };

  const handleRemoveItem=(index)=>{
    const updatedItems=[...items];
    updatedItems.splice(index,1);
    setItems(updatedItems);

  };




};

export default Form;
