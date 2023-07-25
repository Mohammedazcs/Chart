import React, { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from "axios";
import "./ExampleGrid.scss"

const options = [
  { value: "", label: "Select the Category Type" },
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
];

const Category = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("income");




  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (option) => {
    if (option.value) {
      setCategory(option.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        title: title,
        category: category,
      };

      const response = await axios.post("/api/expenses", formData);
      console.log(response.data);
      alert("Form saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <div className="category">
        <h1 className="title">Expenses Category Form</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">Enter Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category" className="form-label">Choose Category</label>
            <Dropdown
              id="category"
              name="category"
              options={options}
              value={category}
              onChange={handleCategoryChange}
              className="dropdown"
            />
          </div>
          <button type="submit" className="form-button">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Category;
