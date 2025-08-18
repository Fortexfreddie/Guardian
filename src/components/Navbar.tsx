import { useNavigate } from "react-router-dom";
import { Shield, HelpCircle } from "lucide-react";
import Button from "./UI/Button";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <header className="container mx-auto bg-gray-100">  
            <nav className="fixed p-4 top-0 z-50 w-full border-b border-gray-200 backdrop-blur-md">
                <div className="flex items-center justify-between">

                    {/* logo */}
                    <div onClick={() => navigate("/")} className="flex items-center space-x-2 cursor-pointer">
                        <div className="p-2 shadow-md rounded-2xl bg-gradient-to-br from-gray-900 to-gray-500 flex items-center justify-center">
                            <Shield className="h-4 w-4 fill-gray-50 text-gray-50" />
                        </div>
                        <span className="text-xl font-bold bg-black bg-clip-text text-transparent [text-shadow:1px_1px_2px_rgb(0_0_0_/_0.25)]">
                            PiGuardian
                        </span>
                    </div>

                    {/* Navigation & Theme toggle */}
                    <div className="flex items-center space-x-2">
                        <Button className="px-4 py-2 gap-2 bg-black text-gray-50"><HelpCircle className="h-4 w-4" /> Help</Button>
                        <Button className="px-4 py-2 gap-2 bg-black text-gray-50"><HelpCircle className="h-4 w-4" /> FAQ</Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;