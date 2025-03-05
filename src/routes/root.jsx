import { BrowserRouter, Routes, Route } from "react-router";

import { HomePage } from '../pages/home';
import { AboutPage } from '../pages/about';
import { LoginPage } from '../pages/login';

export const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}