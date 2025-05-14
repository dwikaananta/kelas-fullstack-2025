import { FaSave } from "react-icons/fa";
import { AuthLayout } from "../../layouts/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Swal from "sweetalert2";

export const EditUserPage = () => {
  const params = useParams();

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
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "User updated !",
        });
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
        <input
          name="name"
          type="text"
          defaultValue={user.name || ""}
          onKeyUp={(e) => {
            setUser((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
          className="
            py-2 px-4 w-full
            mb-2 border border-blue-800
            rounded ring-1 ring-blue-900
          "
        />
        {validationError.name && (
          <span className="text-red-500 block mb-3">
            {validationError.name}
          </span>
        )}

        <label htmlFor="">Email</label>
        <input
          name="email"
          type="email"
          defaultValue={user.email || ""}
          onKeyUp={(e) => {
            setUser((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
          className="
            py-2 px-4 w-full
            mb-2 border border-blue-800
            rounded ring-1 ring-blue-900
          "
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
