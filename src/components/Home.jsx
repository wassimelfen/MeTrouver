import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mainHome">
      <div className="homeButtons">
        <h1 className="intro-title mb-4">
          WE HELP YOU WITH
          <strong>
            <Typed
              className="typedText"
              strings={[" more clients", " any service"]}
              typeSpeed={80}
              backDelay={1100}
              backSpeed={30}
              loop
            />
          </strong>
        </h1>
        <Link to="/serviceprovider">
          <button className="btn-4">
            <span>Service Provider</span>
          </button>
        </Link>
        <Link to="/serviceseeker">
          <button className="btn-4">
            <span>Service Seeker</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
