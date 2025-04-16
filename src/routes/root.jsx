import { BrowserRouter, Routes, Route } from "react-router";

import { HomePage } from '../pages/home';
import { AboutPage } from '../pages/about';
import { LoginPage } from '../pages/login';
import { TodosPage } from "../pages/todos";

import { UsersPage } from "../pages/users";
import { DashboardPage } from "../pages/dashboard";
import { ReportPage } from "../pages/report";

export const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/todos" element={<TodosPage />} />

                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/report" element={<ReportPage />} />
            </Routes>
        </BrowserRouter>
    )
}