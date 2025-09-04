import { ArrowRightLeft, TrendingUp, Clock, DollarSign } from "lucide-react";
import SearchBar from "../UI/SearchBar";
import TransactionsTable from "./TransactionsTable";

const statsConfig = [
  {
    title: "Total Transactions",
    icon: ArrowRightLeft,
    value: "15,847,293",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "24h Volume",
    icon: TrendingUp,
    value: "2.4M π",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Avg Confirmation",
    icon: Clock,
    value: "5.2s",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "Avg Fee",
    icon: DollarSign,
    value: "0.001 π",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

const BlocksPage = () => {
    
    return (
        <div className="p-8">
            <div className="space-y-10 mb-8">
                <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <ArrowRightLeft className="h-5 w-5 text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Transaction Explorer</h1>
                    <p className="text-gray-500">
                    Search and analyze Pi Network transactions
                    </p>
                </div>
                </div>

                {/* Search Bar */}
                <div className="flex justify-center">
                    <SearchBar placeholder="Search by transaction hash, or wallet address..." />
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 items-center">
                {statsConfig.map((config, index) => (
                    <div
                    key={index}
                    className="bg-gray-50 text-gray-800 flex flex-col rounded-xl border border-gray-300 p-4 shadow-sm backdrop-blur-md hover:shadow-lg transition-all duration-200 overflow-hidden"
                    >
                    <div className="flex gap-2 lg:gap-4 items-center">
                        <div
                        className={`p-3 rounded-lg ${config.bgColor} group-hover:scale-110 transition-transform duration-200`}
                        >
                        <config.icon className={`h-4 w-4 ${config.color}`} />
                        </div>
                        <div className="text-start">
                        <p className="text-sm font-medium text-gray-500">
                            {config.title}
                        </p>
                        <p className="text-md font-bold text-gray-800 truncate">
                            {config.value}
                        </p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>

                {/* Transactions Table */}
                <TransactionsTable />
            </div>
        </div>
    );
};
 
export default BlocksPage;