import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>

      <ul>
        <li>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>

        <li>
          <Link to="/add_employee">
            <button>Add Employee</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
