import { useState } from "react";
import Card from "./Card";
import data from "../Helpers/Data";
import "../Components/Main.css";

const Main = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const filterData = () => {
    const lowerCaseValue = value.toLowerCase();
    return data.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseValue)
    );
  };
  return (
    <div>
      <div className="container">
        <input
          className="form-control"
          placeholder="Search Player"
          type="search"
          onChange={handleChange}
          value={value}
        />
        <hr />
        <div className="row container fluid background">
          {filterData().map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
