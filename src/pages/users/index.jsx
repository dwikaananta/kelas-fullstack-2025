import { useEffect, useState } from "react";
import { AuthLayout } from "../../layouts/auth";
import axios from "axios";
import { Link } from "react-router";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

export const UsersPage = () => {
  // state for storing data users
  const [users, setUsers] = useState([]);

  // use effect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/api/users");

      setUsers(res.data.users);
    };

    fetchData();
  }, []);

  const handleDelete = () => {
    // 
  }

  return (
    <AuthLayout>
      <h1 className="text-semibold text-lg">Data User</h1>

      <Link
        to="/users/create"
        className="flex items-center w-sm py-1 bg-blue-800 text-white rounded justify-center gap-1 hover:opacity-70"
      >
        <FaPlus />
        Add New
      </Link>

      <table className="w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="flex">
                <img
                  src={`http://localhost:8000/storage/users/profile/${user.profile}`}
                  alt="Profile"
                  className="w-32 rounded mx-auto cursor-pointer"
                  onClick={() =>
                    window.open(
                      `http://localhost:8000/storage/users/profile/${user.profile}`
                    )
                  }
                />
              </td>
              <td>
                <div className="flex justify-center">
                  <Link to={`/users/${user.id}`}>
                    <FaEdit className="text-green-500" />
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-500 cursor-pointer"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AuthLayout>
  );
};
