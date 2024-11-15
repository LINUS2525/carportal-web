import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Price Range</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value={30000}
          title="< 30000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50000}
          title="< 50000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80000}
          title="< 80000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100000}
          title="< 100000"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
