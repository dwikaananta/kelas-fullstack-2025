import axios from "axios";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Input } from "../components/input";
import { GuestLayout } from "../layouts/guest";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

export const LoginPage = () => {
  const [form, setForm] = useState({});
  const [validationError, setValidationError] = useState([]);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8000/api/login";

      const res = await axios.post(url, form);

      console.log(res.data);
      // Store token to cookie

      if (res.data) {
        const plainTextToken = res.data.token.plainTextToken;
        const token = plainTextToken.split("|")[1];

        Cookies.set("_token", token);
        navigate("/users");
      }
    } catch (error) {
      if (error.status === 422) {
        setValidationError(error.response.data.errors);
        console.log(error.response.data.errors);
      }
    }
  };

  return (
    <GuestLayout>
      <div className="flex w-full h-[70vh]">
        <form className="m-auto" onSubmit={handleLogin}>
          <h1 className="text-2xl text-blue-900 font-semibold text-center mb-3">
            Login Page
          </h1>
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            onKeyUp={(e) => {
              setForm((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              });
            }}
          />
          <Input
            name="password"
            type="password"
            placeholder="******"
            onKeyUp={(e) => {
              setForm((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              });
            }}
          />
          <button
            className="
            bg-blue-900 py-2 px-4
            text-white rounded
            flex items-center gap-x-1
          "
          >
            <FaSignInAlt />
            Save
          </button>
        </form>
      </div>
    </GuestLayout>
  );
};
