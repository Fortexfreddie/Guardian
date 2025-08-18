import { Blocks, ArrowRightLeft, Wallet, BarChart3, Code, Settings, HelpCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";
import Button from "./UI/Button";

const navigation = [
    { name: "Blocks", href: "/blocks", icon: Blocks },
    { name: "Transactions", href: "/transactions", icon: ArrowRightLeft },
    { name: "Wallets", href: "/wallets", icon: Wallet },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Developers", href: "/developers", icon: Code },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Help", href: "/help", icon: HelpCircle }
];

const Sidebar = () => {
    const { sidebarOpen, setSidebarOpen } = useSidebar();
    const navigate = useNavigate();
    const pathname = window.location.pathname;

    const SidebarContent = (
        <ul className="flex flex-col space-y-4 lg:space-y-6">
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
    );

    return ( 
        <> 
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block sticky left-0 top-0.5 h-[100vh] w-64 border-r border-gray-200 bg-gray-100 py-10 px-6 backdrop-blur-md">
                {SidebarContent}
            </aside>

            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-[100vh] overflow-y-auto w-64 z-50 border-r border-gray-200 bg-gray-100 py-10 px-6 transform transition-transform duration-300 ease-in-out xl:hidden ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-end p-4">
                    <Button className="bg-black p-2 text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>
                {SidebarContent}
            </aside>

            {/* Overlay for mobile sidebar */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/70 bg-opacity-50 z-40 xl:hidden transition-opacity duration-300"
                    onClick={() => setSidebarOpen(false)}>
                </div>
            )}
        </>
    );
}
 
export default Sidebar;