import { Shield } from "lucide-react";

const Footer = () => {
    return (  
        <footer className="container mx-auto bg-gray-100 px-4">
            <div className="py-12 border-t border-gray-200 backdrop-blur-md">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 shadow-md rounded-2xl bg-gradient-to-br from-gray-900 to-gray-500 flex items-center justify-center">
                                <Shield className="h-4 w-4 fill-gray-50 text-gray-50" />
                            </div>
                            <span className="text-lg font-bold bg-black bg-clip-text text-transparent [text-shadow:1px_1px_2px_rgb(0_0_0_/_0.25)]">PiGuardian</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Empowering the Pi Network community with transparency and security tools.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold">Explorer</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
                                Blocks
                            </li>
                            <li className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
                                Transactions
                            </li>
                            <li className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
                                Wallets
                            </li>
                            <li className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
                                Analytics
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold">Developers</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
                                API Docs
                            </li>
                            <li className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
                                Get API Key
                            </li>
                            <li className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
                                Dashboard
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
                                Help Center
                            </li>
                            <li className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
                                FAQ
                            </li>
                            <li className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;