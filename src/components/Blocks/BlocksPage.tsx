import { Blocks, TrendingUp, Clock, Database } from "lucide-react";

const statsConfig = [
    {
        title: "Latest Block",
        icon: Blocks,
        value: "#2,847,392",
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
        title: "Block Size",
        icon: Database,
        value: "~250KB",
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
        title: "Blocks Today",
        icon: Clock,
        value: "100,000",
        color: "text-orange-600 dark:text-orange-400",
        bgColor: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
        title: "Avg Block Time",
        icon: TrendingUp,
        value: "5.2 s",
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-100 dark:bg-green-900/20",
    },
];

const BlocksPage = () => {
    return (  
        <div className="p-8">
            <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <Blocks className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Block Explorer</h1>
                        <p className="text-gray-500">Browse and analyze Pi Network blocks</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BlocksPage;