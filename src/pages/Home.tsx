import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (  
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
                <main className="container mx-auto">
                    <Dashboard />
                </main>
            </div>
            <Footer />
        </div>
    );
}
 
export default Home;