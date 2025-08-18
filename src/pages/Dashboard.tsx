import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (  
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
                <main className="container mx-auto">
                    <div className="lg:flex">
                        <Sidebar />
                        <div className="flex-1">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
 
export default Dashboard;