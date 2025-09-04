import Button from "../UI/Button";
import { Blocks, Database, Clock, Copy, ArrowLeft, ExternalLink, ArrowRightLeft } from "lucide-react";
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

const BlockDetail = () => {
    const { transactionId } = useParams<{ transactionId: string }>();
    const navigate = useNavigate();
    const blockHeight = transactionId || "";
    // console.log("Block ID:", transactionId);

    return (  
        <div className="p-8">
            <div className="space-y-10 mb-8">
                <div className="md:flex items-center space-x-4 mb-8">
                    <Button onClick={() => navigate("/transactions")} className="p-2 border border-gray-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Transactions
                    </Button>
                    <div className="flex items-center space-x-3 mt-4 md:mt-0">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <ArrowRightLeft className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Transaction Details</h1>
                            <p className="text-gray-500">Transaction information and operations</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Block Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Info */}
                        <div className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 bg-black p-4">
                                <ArrowRightLeft className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-semibold text-gray-50">
                                    Transaction Information
                                </h3>
                            </div>
                            <div className="space-y-4 px-4 pb-4">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Amount</label>
                                        <p className="text-lg font-mono">{mockBlockData.fees.toLocaleString()} π</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Timestamp</label>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="h-4 w-4 text-gray-500" />
                                            <p className="text-sm">{mockBlockData.timestamp}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Fee</label>
                                        <p className="text-lg font-semibold font-mono">
                                            {mockBlockData.fees.toLocaleString()} π
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Confirmations</label>
                                        <p className="text-lg">{mockBlockData.transactionCount}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Transaction Hash</label>
                                    <div className="flex items-center space-x-2 mt-1 break-all">
                                        <span className="p-2 bg-gray-100 rounded text-sm font-mono w-full">
                                            {mockBlockData.hash}
                                        </span>
                                        <Button className="p-2 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => navigator.clipboard.writeText(mockBlockData.hash)}>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Block Hash</label>
                                    <div className="flex items-center space-x-2 mt-1 break-all">
                                        <span className="p-2 bg-gray-100 rounded text-sm font-mono w-full">
                                            # {mockBlockData.height}
                                        </span>
                                        <Button className="p-2 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => navigate(`/blocks/block/1`)}>
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-medium text-gray-500">Memo</label>
                                    <span className="p-2 bg-gray-100 rounded text-sm font-mono w-full">
                                        Payment for services rendered
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Addresses */}
                        <div className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 bg-black p-4">
                                <ArrowRightLeft className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-semibold text-gray-50">
                                    Addresses
                                </h3>
                            </div>
                            <div className="space-y-4 px-4 pb-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">From</label>
                                    <div className="flex items-center space-x-2 mt-1 break-all">
                                        <span className="p-2 bg-gray-100 rounded text-sm font-mono w-full">
                                            {mockBlockData.hash}
                                        </span>
                                        <Button className="p-2 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => navigator.clipboard.writeText(mockBlockData.hash)}>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                        <Button className="p-2 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => navigate(`/transactions/transaction/1`)}>
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">To</label>
                                    <div className="flex items-center space-x-2 mt-1 break-all">
                                        <span className="p-2 bg-gray-100 rounded text-sm font-mono w-full">
                                            {mockBlockData.hash}
                                        </span>
                                        <Button className="p-2 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => navigator.clipboard.writeText(mockBlockData.hash)}>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                        <Button className="p-2 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => navigate(`/transactions/transaction/1`)}>
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
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
 
export default BlockDetail;