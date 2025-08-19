import Button from "../UI/Button";
import { Blocks, Database, Clock, Copy, ArrowLeft, ExternalLink } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import TrxInBlock from "./TrxInBlock";

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
    const { blockId } = useParams<{ blockId: string }>();
    const navigate = useNavigate();
    const blockHeight = blockId || "";
    // console.log("Block ID:", blockId);

    return (  
        <div className="p-8">
            <div className="space-y-10 mb-8">
                <div className="flex items-center space-x-4 mb-8">
                    <Button onClick={() => navigate("/blocks")} className="p-2 border border-gray-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blocks
                    </Button>
                    <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <Blocks className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Block #{blockHeight.toLocaleString()}</h1>
                            <p className="text-gray-500">Block details and transactions</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Block Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Info */}
                        <div className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 bg-black p-4">
                                <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-semibold text-gray-50">
                                    Block Information
                                </h3>
                            </div>
                            <div className="space-y-4 px-4 pb-4">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Block Height</label>
                                        <p className="text-lg font-mono">{blockHeight.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Timestamp</label>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="h-4 w-4 text-gray-500" />
                                            <p className="text-sm">{mockBlockData.timestamp}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Transactions</label>
                                        <p className="text-lg font-semibold font-mono">
                                            {mockBlockData.transactionCount}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Block Size</label>
                                        <p className="text-lg">{(mockBlockData.size / 1024).toFixed(1)} KB</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Block Hash</label>
                                    <div className="flex items-center space-x-2 mt-1 break-all">
                                        <span className="p-2 bg-gray-100 rounded text-sm font-mono">
                                            {mockBlockData.hash}
                                        </span>
                                        <Button className="p-2 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => navigator.clipboard.writeText(mockBlockData.hash)}>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Previous Block Hash</label>
                                    <div className="flex items-center space-x-2 mt-1 break-all">
                                        <span className="p-2 bg-gray-100 rounded text-sm font-mono">
                                            {mockBlockData.previousHash}
                                        </span>
                                        <Button className="p-2 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => navigate(`/blocks/block/1`)}>
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-medium text-gray-500">Validator</label>
                                    <span className="p-2 bg-gray-100 rounded text-sm font-mono w-fit">
                                        {mockBlockData.validator}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation  */}
                    <div className="space-y-6">
                        <div className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 bg-black p-4">
                                <Blocks className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-semibold text-gray-50">
                                    Block Navigation
                                </h3>
                            </div>
                            <div className="space-y-3 px-4 pb-4">
                                <span className="w-full bg-transparent border border-gray-300 py-2 px-4 flex justify-between shadow-sm backdrop-blur-md hover:shadow-md hover:scale-105 transition rounded-full cursor-pointer" onClick={() => navigate(`/blocks/block/${blockHeight}`)}>
                                    <span>Next Block</span>
                                    <span className="text-muted-foreground">#{(blockHeight + 1).toLocaleString()}</span>
                                </span>
                                <span className="w-full bg-transparent border border-gray-300 py-2 px-4 flex justify-between shadow-sm backdrop-blur-md hover:shadow-md hover:scale-105 transition rounded-full cursor-pointer" onClick={() => navigate(`/blocks/block/${blockHeight}`)}>
                                    <span>Previous Block</span>
                                    <span className="text-muted-foreground">#{(blockHeight + 1).toLocaleString()}</span>
                                </span>
                            </div>
                        </div>


                        <div className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 bg-black p-4">
                                <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-semibold text-gray-50">
                                    Quick Stats
                                </h3>
                            </div>
                            <div className="space-y-3 px-4 pb-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Confirmations</span>
                                    <span className="font-semibold">1,247</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Block Reward</span>
                                    <span className="font-semibold">50.0 π</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Gas Utilization</span>
                                    <span className="font-semibold">59.6%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transactions in Block */}
                <div className="mt-8">
                    <TrxInBlock />
                </div>
            </div>
        </div>
    );        
}
 
export default BlockDetail;