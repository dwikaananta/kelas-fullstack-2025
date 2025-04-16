import { useEffect, useState } from 'react';
import { AuthLayout } from '../../layouts/auth';
import axios from 'axios';

export const UsersPage = () => {
  // state for storing data users
  const [users, setUsers] = useState([]);

  // use effect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8000/api/users');

      setUsers(res.data.users);
    }

    fetchData();
  }, []);

  return (
    <AuthLayout>
        <h1 className='text-semibold text-lg'>Data User</h1>

        <table className='w-full'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
    </AuthLayout>
  )
}
