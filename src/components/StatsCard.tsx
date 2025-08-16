import { Blocks, ArrowRightLeft, Wallet, Users, TrendingUp, Clock } from "lucide-react";
import Skeleton from "./UI/Skeleton";

const statsConfig = [
    {
        title: "Latest Block",
        icon: Blocks,
        value: "100,000,000",
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
        title: "Total Transactions",
        icon: ArrowRightLeft,
        value: "100,000,000",
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
        title: "Active Wallets",
        icon: Wallet,
        value: "100,000",
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
        title: "Validators",
        icon: Users,
        value: "1,230",
        color: "text-orange-600 dark:text-orange-400",
        bgColor: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
        title: "Avg Block Time",
        icon: Clock,
        value: "5.2 s",
        color: "text-cyan-600 dark:text-cyan-400",
        bgColor: "bg-cyan-100 dark:bg-cyan-900/20",
    },
    {
        title: "Total Supply",
        icon: TrendingUp,
        value: "100,000,000 π",
        color: "text-yellow-600 dark:text-yellow-400",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
    },
]

const isLoading = false;

const StatsCard = () => {

    if (isLoading) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-50 text-gray-800 flex flex-col gap-6 rounded-xl border border-gray-300 p-6 shadow-sm backdrop-blur-md hover:shadow-lg transition-all duration-200">
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-lg" />   
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-6 w-16" />
                    </div>
                </div>
            </div>
            ))}
        </div>
        )
    }

    return (  
        <div className="space-y-4 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 [text-shadow:1px_1px_2px_rgb(0_0_0_/_0.25)]">Network Overview</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Real-time statistics and insights from the Pi Blockchain network
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
                {
                    statsConfig.map((config, index) => (
                        <div key={index} className="bg-gray-50 text-gray-800 flex flex-col gap-6 rounded-xl border border-gray-300 py-6 shadow-sm backdrop-blur-md hover:shadow-lg transition-all duration-200">
                            <div className="py-4 px-6">
                                <div className="flex gap-4 items-center">
                                    <div className={`p-4 rounded-lg ${config.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                                        <config.icon className={`h-6 w-6 ${config.color}`} />
                                    </div>
                                    <div className="text-start">
                                        <p className="text-sm font-medium text-gray-500 mb-1">{config.title}</p>
                                        <p className="text-2xl font-bold text-gray-800 truncate">{config.value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default StatsCard;