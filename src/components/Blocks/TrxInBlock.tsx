import { ArrowLeft, Clock, Copy, Users, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Skeleton from "../UI/Skeleton";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const BlockData = [
    {
        height: "2847392",
        hash: "0x791fbc6b52a528",
        timestamp: "5s ago",
        transactionCount: "20",
        validator: "validator_1000",
        previousHash: "0x791fbc6b52a527",
        size: "253.2 KB",
        fees: "2,515,190",
    }
];

const TrxInBlock = () => {
    const loading = false;
    const navigate = useNavigate();

    return (  
        <div className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
            <div className="flex items-center gap-2 p-6 bg-black mb-4">
                <ArrowLeft className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-50">
                Transactions in Block
                </h3>
                <span className="ml-2 text-sm py-0.5 px-2 rounded-full bg-white">142</span>
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
                        <div>
                            <table className="w-full text-sm caption-bottom">
                                <thead className="border-b border-gray-300">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">Transaction Hash</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">From → To</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">Amount</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">Fee</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">Time</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-500">Status</th>
                                    <th className=""></th>
                                </thead>
                                <tbody>
                                    {
                                        BlockData.map((block, index) => (
                                            <tr key={index} className="border-b border-gray-300 transition-colors hover:bg-gray-50">
                                                <td className="p-4 align-middle"><span onClick={() => navigate(`/blocks/block/${block.height}`)} className="cursor-pointer">#{block.height}</span></td>
                                                <td className="p-4 align-middle"><span className="flex gap-2 items-center">{block.hash} <span className="cursor-pointer hover:scale-110" onClick={() => navigator.clipboard.writeText(block.hash)}><Copy className="h-3 w-3" /></span></span></td>
                                                <td className="p-4 align-middle text-nowrap"><span className="flex gap-2 items-center"><Clock className="h-3 w-3" /> {block.timestamp}</span></td>
                                                <td className="p-4 align-middle"><span className="px-2.5 py-0.5 bg-gray-200 rounded-full">{block.transactionCount}</span></td>
                                                <td className="p-4 align-middle"><span className="flex items-center gap-2"><span className="flex items-center gap-2"><Users className="h-3 w-3" /> {block.validator}</span></span></td>
                                                <td className="p-4 align-middle">{block.size}</td>
                                                <td className="p-4 align-middle"><ExternalLink className="h-3 w-3" /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div className="flex items-center justify-between p-6 w-full">
                                <span className="text-sm text-gray-500">
                                    Showing 1 to 20 of 2,847,392 blocks
                                </span>
                                <div className="flex items-center space-x-2">
                                    <Button className="border border-gray-300 px-4 py-2 text-black/30 text-sm"><ChevronLeft className="h-4 w-4" /> Previous</Button>
                                    <Button className="border border-gray-300 px-4 py-2 text-black text-sm">Next <ChevronRight className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
 
export default TrxInBlock;