import { useState } from "react";
import "./DymanicForm.scss";
const DynamicForm = () => {
  const [items, setItems] = useState([{ size: "", price: "", quantity: "" }]);

  return (
<div className="parent-container">
    <div >
        <select>
            <option value="">Select Size</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
        </select>

    </div>

    <button>
        Add New Items
    </button>

</div>
  );
};

export default DynamicForm;
