import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const SeekerHome = () => {
  const [categories, setcategories] = useState([]);

  const fetchdata = () => {
    axios
      .get("http://localhost:5000/api/categories/findAll")
      .then(({ data }) => {
        console.log(data);
        setcategories(data);
      })
      .catch((err) => console.log(err));
  };

  useLayoutEffect(() => {
    fetchdata();
  }, []);
    return (
      <div className="homeContainer">
        <div className="parent">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="card">
                <h1>{category.name}</h1>
                <p>{category.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default SeekerHome;
