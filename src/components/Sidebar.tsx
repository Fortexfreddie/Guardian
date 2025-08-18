import { Blocks, ArrowRightLeft, Wallet, BarChart3, Code, Settings, HelpCircle } from "lucide-react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navigation = [
    { name: "Blocks", href: "/blocks", icon: Blocks },
    { name: "Transactions", href: "/transactions", icon: ArrowRightLeft },
    { name: "Accounts", href: "/accounts", icon: Wallet },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Developers", href: "/developers", icon: Code },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Help", href: "/help", icon: HelpCircle }
];

const Sidebar = () => {
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const pathname = window.location.pathname;

    return (  
        <aside className="sticky left-0 top-16 h-full w-64 border-r border-gray-200 bg-gray-100 py-10 px-6 backdrop-blur-md">
            <ul className="flex flex-col space-y-2">
                {navigation.map((nav, index) => {
                    const isActive = pathname === nav.href
                    return (
                        <li key={index} onClick={() => navigate(nav.href)}
                            className={`flex gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${ isActive ? "bg-black text-gray-50" : "text-gray-500 hover:bg-gray-700 hover:text-gray-50" }`}>
                            <nav.icon className="w-5 h-5" />
                            {nav.name}
                        </li>
                    )
                })}
            </ul>
        </aside>
    );
}
 
export default Sidebar;