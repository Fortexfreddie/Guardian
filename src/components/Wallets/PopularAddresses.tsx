import { TrendingUp, Copy, Shield, ExternalLink, Vault } from "lucide-react";
import Skeleton from "../UI/Skeleton";

const recentTransactions = [
    {
        hash: "PI Foundation 1",
        addy: "Pi9876543210FEDCBA",
        amount: "125.50",
        timestamp: "1 minute ago",
        fee: "0.001",
    },
    {
        hash: "Liquidity Reserve 1",
        addy: "Pi9876543210FEDCBA",
        amount: "125.50",
        timestamp: "1 minute ago",
        fee: "0.001",
    },
    {
        hash: "Liquidity Reserve 2",
        addy: "Pi9876543210FEDCBA",
        amount: "125.50",
        timestamp: "1 minute ago",
        fee: "0.001",
    },
    {
        hash: "PI Foundation 2",
        addy: "Pi1122334455667788",
        amount: "89.25",
        timestamp: "3 minutes ago",
        fee: "0.001",
    },
    {
        hash: "Liquidity Reserve 3",
        addy: "PiFFEEDDCCBBAA9988",
        amount: "1,250.00",
        timestamp: "5 minutes ago",
        fee: "0.002",
    },
    {
        hash: "PI Foundation 3",
        addy: "PiFFEEDDCCBBAA9988",
        amount: "1,250.00",
        timestamp: "5 minutes ago",
        fee: "0.002",
    },
];


const exchangeAddresses = [
    {
        name: "OKX",
        addy: "PiEXCHANGEADDRESS1",
        balance: "1.2M π",
        risk: "medium",
    },
    {
        name: "Gate.io",
        addy: "PiEXCHANGEADDRESS2",
        balance: "850K π",
        risk: "low",
    },
    {
        name: "Bitget",
        addy: "PiEXCHANGEADDRESS3",
        balance: "600K π",
        risk: "medium",
    },
    {
        name: "MEXC",
        addy: "PiEXCHANGEADDRESS4",
        balance: "450K π",
        risk: "low",
    },
    {
        name: "Pionex",
        addy: "PiEXCHANGEADDRESS5",
        balance: "300K π",
        risk: "low",
    },
    {
        name: "Pionex.us",
        addy: "PiEXCHANGEADDRESS6",
        balance: "10K π",
        risk: "medium",        
    }
];

const PopularAddresses = () => {
    const truncateAddress = (address: string) => `${address.slice(0, 8)}...${address.slice(-6)}`;
    const recentTransactionsIsLoaded = true;
    return (
        <div className="flex flex-col gap-8">  
            <div className="bg-gray-50 text-gray-800 flex flex-col rounded-xl border border-gray-300 p-6 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-2 mb-6">
                    <Vault className="w-5 h-5 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-800">
                    Exchange Addresses
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {
                        recentTransactionsIsLoaded ? (
                            exchangeAddresses.map((ex, index) => (
                                <div key={index} className="py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 hover:shadow-sm transition-colors duration-200 cursor-pointer">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-mono text-sm text-gray-800">
                                            {ex.name}
                                        </span>
                                        <div className="flex flex-col items-end">
                                            <span className="text-gray-500 font-bold">
                                                {ex.balance}
                                            </span>
                                            <span className="text-gray-500 text-xs">15,847 txs</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-xs mt-2">
                                        <p className="font-mono text-start text-xs text-gray-500 mb-1">
                                            <span className="flex gap-2 items-center">{truncateAddress(ex.addy)} <span className="cursor-pointer hover:scale-110" onClick={() => navigator.clipboard.writeText(ex.addy)}><Copy className="h-3 w-3" /></span></span>
                                        </p>
                                        <div className="flex items-center gap-1.5">
                                            <span className="flex items-center gap-0.5 shadow-sm bg-black text-gray-100 rounded-full px-2.5 py-1 capitalize"><Shield className="w-3 h-3" /> {ex.risk}</span>
                                            <span className="hover:scale-110"><ExternalLink className="h-4 w-4" /></span>   
                                        </div>
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
            <div className="bg-gray-50 text-gray-800 flex flex-col rounded-xl border border-gray-300 p-6 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-800">
                    Popular Addresses
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {
                        recentTransactionsIsLoaded ? (
                            recentTransactions.map((tx, index) => (
                                <div key={index} className="py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 hover:shadow-sm transition-colors duration-200 cursor-pointer">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-mono text-sm text-gray-800">
                                            {tx.hash}
                                        </span>
                                        <div className="flex flex-col items-end">
                                            <span className="text-gray-500 font-bold">
                                                {tx.amount} π
                                            </span>
                                            <span className="text-gray-500 text-xs">15,847 txs</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-xs mt-2">
                                        <p className="font-mono text-start text-xs text-gray-500 mb-1">
                                            <span className="flex gap-2 items-center">{truncateAddress(tx.addy)} <span className="cursor-pointer hover:scale-110" onClick={() => navigator.clipboard.writeText(tx.addy)}><Copy className="h-3 w-3" /></span></span>
                                        </p>
                                        <div className="flex items-center gap-1.5">
                                            <span className="flex items-center gap-0.5 shadow-sm bg-black text-gray-100 rounded-full px-2.5 py-1 capitalize"><Shield className="w-3 h-3" /> low</span>
                                            <span className="hover:scale-110"><ExternalLink className="h-4 w-4" /></span>   
                                        </div>
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
    );
}
 
export default PopularAddresses;