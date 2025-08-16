import { Blocks, ArrowRightLeft, Wallet, BarChart3, Code, Search } from "lucide-react";
import Button from "./UI/Button";

const quick_Links = [
    {
        title: "Explore Blocks",
        description: "Browse the latest blocks and their details",
        href: "/blocks",
        icon: Blocks,
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
        title: "View Transactions",
        description: "Search and analyze transaction history",
        href: "/transactions",
        icon: ArrowRightLeft,
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
        title: "Wallet Lookup",
        description: "Check wallet balances and transaction history",
        href: "/accounts",
        icon: Wallet,
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
        title: "Network Analytics",
        description: "Comprehensive charts and network insights",
        href: "/analytics",
        icon: BarChart3,
        color: "text-orange-600 dark:text-orange-400",
        bgColor: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
        title: "API Documentation",
        description: "Integrate with our powerful blockchain APIs",
        href: "/developers",
        icon: Code,
        color: "text-cyan-600 dark:text-cyan-400",
        bgColor: "bg-cyan-100 dark:bg-cyan-900/20",
    },
    {
        title: "Advanced Search",
        description: "Multi-parameter search across all data",
        href: "/search",
        icon: Search,
        color: "text-pink-600 dark:text-pink-400",
        bgColor: "bg-pink-100 dark:bg-pink-900/20",
    },
]

const QuickLinks = () => {
    return (  
        <div className="space-y-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 [text-shadow:1px_1px_2px_rgb(0_0_0_/_0.25)]">Quick Access</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Jump directly to the tools and information you need
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6 items-center">
                {
                    quick_Links.map((link, index) => (
                        <div key={index} className="bg-gray-50 text-gray-800 flex flex-col gap-6 rounded-xl border border-gray-300 py-6 shadow-sm backdrop-blur-md hover:shadow-lg transition-all duration-200">
                            <div className="px-6 space-y-4">
                                <div className="flex gap-4 items-center">
                                    <div className={`p-3 rounded-lg ${link.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                                        <link.icon className={`h-5 w-5 ${link.color}`} />
                                    </div>
                                    <h3 className="font-semibold text-gray-800 transition-colors">
                                        {link.title}
                                    </h3>
                                </div>
                                <div className="flex flex-col items-start text-start space-y-4">
                                    <p className="text-sm  text-gray-500 leading-relaxed">{link.description}</p>
                                    <Button
                                        className="w-fit justify-start py-1 px-4 bg-black text-white">
                                        Explore →
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default QuickLinks;