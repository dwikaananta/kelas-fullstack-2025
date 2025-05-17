import axios from "axios";
import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router";
import { AuthLayout } from "../../layouts/auth";
import { swalMixin } from "../../lib/sweet-alert";
import { Input } from "../../components/input";

export const CreateUserPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [validationError, setValidationError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:8000/api/users";

    const formData = new FormData();

    form.name && formData.append("name", form.name);
    form.email && formData.append("email", form.email);
    form.password && formData.append("password", form.password);
    form.profile && formData.append("profile", form.profile);

    try {
      const res = await axios.post(url, formData);
      console.log(res.data);

      if (res.data) {
        swalMixin("success", "User stored !");

        navigate("/users");
      }
    } catch (error) {
      // console.error(error);

      if (error.status === 422) {
        setValidationError(error.response.data.errors);
        console.log(error.response.data.errors);
      }
    }
  };

  useEffect(() => {
    // console.log(form);
  }, [form]);

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <Input
          name="name"
          type="text"
          onKeyUp={(e) => {
            setForm((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
        />
        {validationError.name && (
          <span className="text-red-500 block mb-3">
            {validationError.name}
          </span>
        )}

        <label htmlFor="">Email</label>
        <Input
          name="email"
          type="email"
          onKeyUp={(e) => {
            setForm((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
        />
        {validationError.email && (
          <span className="text-red-500 block mb-3">
            {validationError.email}
          </span>
        )}

        <label htmlFor="">Password</label>
        <Input
          name="password"
          type="password"
          onKeyUp={(e) => {
            setForm((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
        />
        {validationError.password && (
          <span className="text-red-500 block mb-3">
            {validationError.password}
          </span>
        )}

        <input
          type="file"
          name="profile"
          onChange={(e) => {
            const file = e.target.files[0];

            setForm((prev) => {
              return { ...prev, [e.target.name]: file };
            });
          }}
          className="
            mb-2 border py-2 px-4 border-blue-800
            rounded ring-1 ring-blue-900
          "
        />
        {validationError.profile && (
          <span className="text-red-500 block mb-3">
            {validationError.profile[0]}
          </span>
        )}

        <button
          className="
            bg-blue-900 py-2 px-4
            text-white rounded
            flex items-center gap-x-1
          "
        >
          <FaSave />
          Save
        </button>
      </form>
    </AuthLayout>
  );
};
