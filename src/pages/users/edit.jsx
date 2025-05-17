import axios from "axios";
import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { AuthLayout } from "../../layouts/auth";
import { swalMixin } from "../../lib/sweet-alert";
import { Input } from "../../components/input";

export const EditUserPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `http://localhost:8000/api/users/${params.id}`;

    const fetchUser = async () => {
      const res = await axios.get(url);
      setUser(res.data.user);
    };

    fetchUser();
  }, [params.id]);

  const [validationError, setValidationError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `http://localhost:8000/api/users/${params.id}`;

    try {
      const res = await axios.patch(url, user);
      console.log(res.data);

      if (res.data) {
        swalMixin("success", "User updated !");

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

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <Input
          name="name"
          type="text"
          value={user.name}
          onKeyUp={(e) => {
            setUser((prev) => {
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
          value={user.email}
          onKeyUp={(e) => {
            setUser((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
        />
        {validationError.email && (
          <span className="text-red-500 block mb-3">
            {validationError.email}
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
