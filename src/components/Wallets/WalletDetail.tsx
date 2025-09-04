import Button from "../UI/Button";
import { Blocks, Database, Copy, ArrowLeft, Wallet, Star } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import AiAnalysis from "./AiAnalysis";

const mockBlockData = {
    height: 2847392,
    hash: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890",
    previousHash: "0x0987654321fedcba0987654321fedcba0987654321fedcba0987654321fedcba",
    timestamp: "16m ago",
    validator: "validator_node_1247",
    transactionCount: 142,
    size: 245678,
    fees: 12.45,
    baseReserve: 1.0,
    difficulty: "0x1bc16d674ec80000",
    nonce: "0x42",
    gasUsed: 8945672,
    gasLimit: 15000000
}

const WalletDetail = () => {
    const { transactionId } = useParams<{ transactionId: string }>();
    const navigate = useNavigate();
    const blockHeight = transactionId || "";
    // console.log("Block ID:", transactionId);

    return (  
        <div className="p-8">
            <div className="space-y-10 mb-8">
                <div className="md:flex items-center space-x-4 mb-8">
                    <Button onClick={() => navigate("/wallets")} className="p-2 border border-gray-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Wallets
                    </Button>
                    <div className="flex items-center space-x-3 mt-4 md:mt-0">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <Wallet className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Wallet Details</h1>
                            <p className="text-gray-500">Address information and transaction history</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Wallet Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Info */}
                        <div className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 bg-black p-4">
                                <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-semibold text-gray-50">
                                    Wallet Overview
                                </h3>
                            </div>
                            <div className="space-y-4 px-4 pb-4">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Balance</label>
                                        <p className="text-lg font-semibold font-mono">
                                            {mockBlockData.fees.toLocaleString()} π
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Locking</label>
                                        <p className="text-lg font-semibold font-mono">
                                            {mockBlockData.fees.toLocaleString()} π
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Claimable</label>
                                        <p className="text-lg font-semibold font-mono">
                                            {mockBlockData.fees.toLocaleString()} π
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Transactions</label>
                                        <p className="text-lg">{mockBlockData.transactionCount}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Address</label>
                                    <div className="flex items-center space-x-2 mt-1 break-all">
                                        <span className="p-2 bg-gray-100 rounded shadow-sm backdrop-blur-md text-sm font-mono w-full">
                                            {mockBlockData.hash}
                                        </span>
                                        <Button className="p-2 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => navigator.clipboard.writeText(mockBlockData.hash)}>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Token Holdings */}
                        <div className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 bg-black p-4">
                                <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-semibold text-gray-50">
                                    Token Holdings
                                </h3>
                            </div>
                            <div className="space-y-4 px-4 pb-4">
                                <div>
                                    <div className="py-2 px-4 flex items-center justify-between bg-gray-100 rounded-lg shadow-sm backdrop-blur-md text-sm font-mono w-full">
                                        <div className="flex gap-2 items-center">
                                            <span className="w-8 h-8 grid place-items-center rounded-full bg-gray-800 text-white shadow-md backdrop-blur-md">π</span>
                                            <div>
                                                <p className="font-bold">Pi</p>
                                                <p className="text-sm text-gray-500">π</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold">15,847.25</p>
                                            <p className="text-sm text-gray-500">15,847.25 π</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 items-center">
                        {/* Risk Analysis */}
                        <AiAnalysis />


                        <div className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 bg-black p-4">
                                <Blocks className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-semibold text-gray-50">
                                    Block Navigation
                                </h3>
                            </div>
                            <div className="space-y-3 px-4 pb-4">
                                <span className="w-full flex bg-transparent border border-gray-300 py-1 px-4 shadow-sm backdrop-blur-md hover:shadow-md hover:scale-105 transition rounded-full cursor-pointer" onClick={() => navigate(`/blocks/block/${blockHeight}`)}>
                                    <span className="text-sm">View Sender</span>
                                </span>
                                <span className="w-full flex bg-transparent border border-gray-300 py-1 px-4 shadow-sm backdrop-blur-md hover:shadow-md hover:scale-105 transition rounded-full cursor-pointer" onClick={() => navigate(`/blocks/block/${blockHeight}`)}>
                                    <span className="text-sm">View Reciever</span>
                                </span>
                                <span className="w-full flex bg-transparent border border-gray-300 py-1 px-4 shadow-sm backdrop-blur-md hover:shadow-md hover:scale-105 transition rounded-full cursor-pointer" onClick={() => navigate(`/blocks/block/${blockHeight}`)}>
                                    <span className="text-sm">View Block</span>
                                </span>
                            </div>
                        </div>


                        <div className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 bg-black p-4">
                                <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-semibold text-gray-50">
                                    Technical Details
                                </h3>
                            </div>
                            <div className="space-y-2 px-4 pb-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Gas Price:</span>
                                    <span className="font-semibold">20 Gwei</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Position in Block:</span>
                                    <span className="font-semibold">47</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );        
}
 
export default WalletDetail;