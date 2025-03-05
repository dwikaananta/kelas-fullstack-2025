import { Header } from "../../components/header";
import { Footer } from '../../components/footer';

export const GuestLayout = ({ children }) => {
    return (
        <div>
            {/* Header Section */}
            <Header />

            {children}

            {/* Footer Section */}
            <Footer />
        </div>
    )
}