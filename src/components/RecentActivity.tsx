import { ArrowRight, Clock, Blocks, ArrowRightLeft } from "lucide-react";

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
];

const RecentActivity = () => {

    const truncateHash = (hash: string) => `${hash.slice(0, 8)}...${hash.slice(-8)}`
    const truncateAddress = (address: string) => `${address.slice(0, 8)}...${address.slice(-6)}`

    return (  
        <div className="space-y-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 [text-shadow:1px_1px_2px_rgb(0_0_0_/_0.25)]">Recent Activity</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                blocks and transactions on the Pi Network
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 text-gray-800 flex flex-col gap-6 rounded-xl border border-gray-300 p-6 shadow-sm backdrop-blur-md">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <Blocks className="w-5 h-5 text-blue-600" />
                            <h3 className="text-xl font-semibold text-gray-800">Recent Blocks</h3>
                        </div>
                        <span className="text-gray-500 hover:text-gray-500/80 text-sm flex items-center gap-1 cursor-pointer py-1 px-3 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 shadow-sm rounded-full">
                            View all <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                    <div className="space-y-4">
                        {
                            recentBlocks.map((block, index) => (
                                <div key={index} className="p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-mono text-sm text-gray-800">#{block.height}</span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <Clock className="w-3 h-3" />
                                            {block.timestamp}
                                        </div>
                                    </div>
                                    <p className="font-mono text-start text-xs text-gray-500 hover:text-gray-400 mb-1">{truncateHash(block.hash)}</p>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-500">{block.transactions} transactions</span>
                                        <span className="text-gray-500">{block.validator}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RecentActivity;