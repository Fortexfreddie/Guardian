import { Shield, CheckCircle } from "lucide-react";

const AiAnalysis = () => {
    return (  
        <div className="col-span-2 lg:col-span-1 bg-white text-gray-800 flex flex-col rounded-xl border border-gray-300 shadow-sm backdrop-blur-md overflow-hidden">
            <div className="flex items-center gap-2 mb-4 bg-black p-4">
                <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold text-gray-50">
                    AI Risk Analysis
                </h3>
            </div>
            <div className="space-y-3 px-4 pb-4">
                <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-green-100">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="capitalize">
                        <p className="font-semibold">low Risk</p>
                        <p className="text-sm text-gray-500">AI-powered analysis.</p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Fraud Score:</span>
                        <span className="font-medium">0.02/1.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Pattern Match:</span>
                        <span className="font-medium text-green-600">Normal</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Address Reputation:</span>
                        <span className="font-medium text-green-600">Good</span>
                    </div>
                </div>
                <div className="p-3 bg-gray-100 rounded-lg">
                    <p className="text-xs text-gray-600">
                        This transaction appears to be legitimate based on our AI analysis. No suspicious patterns detected.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default AiAnalysis;