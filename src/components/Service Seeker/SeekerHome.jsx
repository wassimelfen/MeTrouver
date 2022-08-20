import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const SeekerHome = () => {
  const [categories, setcategories] = useState([]);
  const [changeClassNames, setchangeClassNames] = useState("");
  const [counter, setcounter] = useState(0);

  const fetchdata = () => {
    axios
      .get("http://localhost:5000/api/categories/findAll")
      .then(({ data }) => {
        console.log(data);
        setcategories(data);
      })
      .catch((err) => console.log(err));
  };

  const manyClassnames = (a) => {
    var cardClass = "";
    if (a === 0) {
      cardClass = "classOne";
    } else if (a === 1) {
      cardClass = "classTwo";
    } else if (a === 2) {
      cardClass = "classThree";
    } else if (a === 3) {
      cardClass = "classFour";
    } else if (a === 4) {
      cardClass = "classFive";
    }
    return cardClass;
  };

  useLayoutEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="homeContainer">
      <div className="parent">
        {categories.map((category, index) => (
          <div key={index}>
            <div className={manyClassnames(Math.floor(Math.random() * 5))}>
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
