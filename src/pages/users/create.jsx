import { FaSave } from "react-icons/fa"
import { AuthLayout } from "../../layouts/auth"
import { useEffect, useState } from "react"
import axios from "axios";

export const CreateUserPage = () => { 
    const [form, setForm] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'http://localhost:8000/api/users';

        const formData = new FormData();

        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('password', form.password);
        formData.append('profile', form.profile);

        const res = await axios.post(url, formData);

        console.log(res.data);
    }

    useEffect(() => {
        console.log(form);
    }, [form])

    return <AuthLayout>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input
                name="name"
                type="text"
                onKeyUp={(e) => {
                    setForm(prev => {
                        return {...prev, [e.target.name]: e.target.value}
                    });
                }}
                className="
                    py-2 px-4 w-full
                    mb-2 border border-blue-800
                    rounded ring-1 ring-blue-900
                "
            />
            <label htmlFor="">Email</label>
            <input
                name="email"
                type="email"
                onKeyUp={(e) => {
                    setForm(prev => {
                        return {...prev, [e.target.name]: e.target.value}
                    });
                }}
                className="
                    py-2 px-4 w-full
                    mb-2 border border-blue-800
                    rounded ring-1 ring-blue-900
                "
            />
            <label htmlFor="">Password</label>
            <input
                name="password"
                type="password"
                placeholder="******"
                onKeyUp={(e) => {
                    setForm(prev => {
                        return {...prev, [e.target.name]: e.target.value}
                    });
                }}
                className="
                    py-2 px-4 w-full
                    mb-2 border border-blue-800
                    rounded ring-1 ring-blue-900
                "
            />

            <input
                type="file"
                name="profile"
                onChange={(e) => {
                    const file = e.target.files[0];

                    setForm(prev => {
                        return {...prev, [e.target.name]: file}
                    });
                }}
                className="
                    mb-2 border py-2 px-4 border-blue-800
                    rounded ring-1 ring-blue-900
                "
            />
            
            <button className="
                bg-blue-900 py-2 px-4
                text-white rounded
                flex items-center gap-x-1
            ">
                <FaSave />
                Save
            </button>
        </form>
    </AuthLayout>
}