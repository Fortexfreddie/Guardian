import { ArrowRight, Clock, Blocks, ArrowRightLeft } from "lucide-react";
import Skeleton from "./UI/Skeleton";

const recentBlocks = [
    {
    height: 2847392,
    hash: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890",
    timestamp: "2 minutes ago",
    transactions: 247,
    validator: "Validator-001",
    },
    {
    height: 2847391,
    hash: "0x9876543210fedcba0987654321fedcba0987654321fedcba0987654321fedcba",
    timestamp: "4 minutes ago",
    transactions: 189,
    validator: "Validator-042",
    },
    {
    height: 2847390,
    hash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
    timestamp: "6 minutes ago",
    transactions: 312,
    validator: "Validator-017",
    },
    {
    height: 2847390,
    hash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
    timestamp: "6 minutes ago",
    transactions: 312,
    validator: "Validator-017",
    },
];

const recentTransactions = [
    {
        hash: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        from: "Pi1A2B3C4D5E6F7890",
        to: "Pi9876543210FEDCBA",
        amount: "125.50",
        timestamp: "1 minute ago",
        fee: "0.001",
    },
    {
        hash: "0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321",
        from: "PiABCDEF1234567890",
        to: "Pi1122334455667788",
        amount: "89.25",
        timestamp: "3 minutes ago",
        fee: "0.001",
    },
    {
        hash: "0x5678901234abcdef5678901234abcdef5678901234abcdef5678901234abcdef",
        from: "Pi9988776655443322",
        to: "PiFFEEDDCCBBAA9988",
        amount: "1,250.00",
        timestamp: "5 minutes ago",
        fee: "0.002",
    },
    {
        hash: "0x5678901234abcdef5678901234abcdef5678901234abcdef5678901234abcdef",
        from: "Pi9988776655443322",
        to: "PiFFEEDDCCBBAA9988",
        amount: "1,250.00",
        timestamp: "5 minutes ago",
        fee: "0.002",
    },
];

const RecentActivity = () => {

    const truncateHash = (hash: string) => `${hash.slice(0, 8)}...${hash.slice(-8)}`;
    const truncateAddress = (address: string) => `${address.slice(0, 8)}...${address.slice(-6)}`;
    const recentBlocksIsLoaded = true;
    const recentTransactionsIsLoaded = true;

    return (
        <div className="space-y-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 [text-shadow:1px_1px_2px_rgb(0_0_0_/_0.25)]">
                Recent Activity
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                blocks and transactions on the Pi Network
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                <div className="bg-gray-50 text-gray-800 flex flex-col gap-6 rounded-xl border border-gray-300 p-6 shadow-sm backdrop-blur-md">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <Blocks className="w-5 h-5 text-blue-600" />
                            <h3 className="text-xl font-semibold text-gray-800">
                            Recent Blocks
                            </h3>
                        </div>
                        <span className="text-gray-500 hover:text-gray-500/80 text-sm flex items-center gap-1 cursor-pointer py-1 px-3 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 shadow-sm rounded-full">
                            View all <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                    <div className="space-y-4">
                        {
                            recentBlocksIsLoaded ? (
                                recentBlocks.map((block, index) => (
                                    <div key={index} className="p-4 rounded-lg border border-gray-300 hover:bg-gray-100 hover:shadow-sm transition-colors duration-200 cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-mono text-sm text-gray-800">
                                                #{block.height}
                                            </span>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <Clock className="w-3 h-3" />
                                                {block.timestamp}
                                            </div>
                                        </div>
                                        <div className="w-fit mb-1">
                                            <p className="font-mono text-start text-xs text-gray-500 hover:text-blue-600 hover:underline">
                                            {truncateHash(block.hash)}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-500">
                                                {block.transactions} transactions
                                            </span>
                                            <span className="text-gray-500">{block.validator}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                [...Array(4)].map((_, i) => (
                                    <div key={i} className="p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <Skeleton key={i} className="h-4 w-16"></Skeleton>
                                            <Skeleton key={i} className="h-4 w-24"></Skeleton>
                                        </div>
                                        <div className="w-fit mb-1">
                                            <Skeleton key={i} className="h-4 w-40"></Skeleton>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Skeleton key={i} className="h-4 w-32"></Skeleton>
                                            <Skeleton key={i} className="h-4 w-24"></Skeleton>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
                <div className="bg-gray-50 text-gray-800 flex flex-col gap-6 rounded-xl border border-gray-300 p-6 shadow-sm backdrop-blur-md">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <ArrowRightLeft className="w-5 h-5 text-green-600" />
                            <h3 className="text-xl font-semibold text-gray-800">
                            Recent Transactions
                            </h3>
                        </div>
                        <span className="text-gray-500 hover:text-gray-500/80 text-sm flex items-center gap-1 cursor-pointer py-1 px-3 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 shadow-sm rounded-full">
                            View all <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                    <div className="space-y-4">
                        {
                            recentTransactionsIsLoaded ? (
                                recentTransactions.map((tx, index) => (
                                    <div key={index} className="p-4 rounded-lg border border-gray-300 hover:bg-gray-100 hover:shadow-sm transition-colors duration-200 cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-mono text-sm text-gray-800">
                                                {truncateHash(tx.hash)}
                                            </span>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <Clock className="w-3 h-3" />
                                                {tx.timestamp}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 w-fit mb-1">
                                            <p className="font-mono text-start text-xs text-gray-500 hover:text-blue-600 hover:underline">
                                                {truncateAddress(tx.from)}
                                            </p>
                                            <ArrowRight className="w-3 h-3 text-gray-500" />
                                            <p className="font-mono text-start text-xs text-gray-500 hover:text-blue-600 hover:underline">
                                                {truncateAddress(tx.to)}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-500 font-bold">
                                                {tx.amount} π
                                            </span>
                                            <span className="text-gray-500">Fee: {tx.fee} π</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                [...Array(4)].map((_, i) => (
                                    <div key={i} className="p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <Skeleton key={i} className="h-4 w-16"></Skeleton>
                                            <Skeleton key={i} className="h-4 w-24"></Skeleton>
                                        </div>
                                        <div className="w-fit mb-1">
                                            <Skeleton key={i} className="h-4 w-40"></Skeleton>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Skeleton key={i} className="h-4 w-32"></Skeleton>
                                            <Skeleton key={i} className="h-4 w-24"></Skeleton>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RecentActivity;