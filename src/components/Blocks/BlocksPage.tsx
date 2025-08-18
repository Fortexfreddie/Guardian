import { Blocks, TrendingUp, Clock, Database } from "lucide-react";
import SearchBar from "../UI/SearchBar";
import Skeleton from "../UI/Skeleton";

const statsConfig = [
  {
    title: "Latest Block",
    icon: Blocks,
    value: "#2,847,392",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Block Size",
    icon: Database,
    value: "~250KB",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Blocks Today",
    icon: Clock,
    value: "100,000",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "Avg Block Time",
    icon: TrendingUp,
    value: "5.2 s",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

const BlocksPage = () => {
    const loading = false;
    
    return (
        <div className="p-8">
        <div className="space-y-10 mb-8">
            <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Blocks className="h-5 w-5 text-white" />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Block Explorer</h1>
                <p className="text-gray-500">
                Browse and analyze Pi Network blocks
                </p>
            </div>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center">
                <SearchBar placeholder="Search by transaction hash, or wallet address..." />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {statsConfig.map((config, index) => (
                <div
                key={index}
                className="bg-gray-50 text-gray-800 flex flex-col rounded-xl border border-gray-300 p-4 shadow-sm backdrop-blur-md hover:shadow-lg transition-all duration-200"
                >
                <div className="flex gap-4 items-center">
                    <div
                    className={`p-3 rounded-lg ${config.bgColor} group-hover:scale-110 transition-transform duration-200`}
                    >
                    <config.icon className={`h-4 w-4 ${config.color}`} />
                    </div>
                    <div className="text-start">
                    <p className="text-sm font-medium text-gray-500">
                        {config.title}
                    </p>
                    <p className="text-lg font-bold text-gray-800 truncate">
                        {config.value}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Blocks Table */}
            <div className="bg-gray-50 text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
                <div className="flex items-center gap-2 p-6">
                    <Blocks className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-800">
                    Recent Blocks
                    </h3>
                </div>
                <div className="w-full overflow-auto">
                    {
                        loading ? (
                            Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex items-center gap-6 border-t border-gray-300 p-6 shadow-sm backdrop-blur-md transition-all duration-200">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-4 flex-1" />
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-4 w-16" />
                                </div>
                            ))
                        ) : (
                            <table className="w-full text-sm caption-bottom">
                                <caption className="caption-bottom text-start text-gray-600 mt-2">Showing 1 to 20 of 2,847,392 blocks</caption>
                                <thead></thead>
                            </table>
                        )
                    }
                </div>
            </div>
        </div>
        </div>
    );
};
 
export default BlocksPage;