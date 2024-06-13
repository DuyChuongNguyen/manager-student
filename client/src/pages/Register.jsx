import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("http://localhost:5555/register", {
        name,
        email,
        password,
      });
      if (data === "user_existed") {
        toast.error(data.error);
      }
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Register Successfull. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
          onSubmit={handelRegister}
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Register
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              for="name"
            >
              Name
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              name="emnameail"
              id="name"
              placeholder="name..."
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              for="email"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              name="email"
              id="email"
              placeholder="@email"
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              for="password"
            >
              Password
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              id="password"
              placeholder="password"
            />
          </div>
          {/* <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              for="confirm"
            >
              Confirm password
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="confirm"
              id="confirm"
              placeholder="confirm password"
            />
          </div> */}
          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Register
          </button>
          <Link to="/login">
            <button
              type="submit"
              className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
