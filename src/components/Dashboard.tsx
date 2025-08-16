import { Shield, ArrowRight } from "lucide-react";
import SearchBar from "./UI/SearchBar";
import Button from "./UI/Button";
import StatsCard from "./StatsCard";
import QuickLinks from "./QuickLinks";
import RecentActivity from "./RecentActivity";

const Dashboard = () => {
    return (  
        <section className="px-4 py-16 md:py-24">
            <div className="text-center space-y-8">
                {/* Hero Content */}
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center justify-center mb-6 gap-4">
                        <div className="h-20 w-20 lg:h-12 lg:w-12 shadow-md rounded-2xl bg-gradient-to-br from-gray-900 to-gray-500 flex items-center justify-center">
                            <Shield className="h-10 w-10 lg:h-6 lg:w-6 fill-gray-50 text-gray-50" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text text-transparent [text-shadow:1px_1px_2px_rgb(0_0_0_/_0.25)]">
                            PiGuardian Explorer
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed [text-shadow:1px_1px_2px_rgb(0_0_0_/_0.25)]">
                        Explore the Pi Blockchain. <span className="font-semibold text-gray-800">DYOR with Confidence.</span>
                    </p>

                    <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
                        The most comprehensive blockchain explorer for Pi Network. Search transactions, analyze wallets, and
                        discover insights with our advanced tools.
                    </p>

                    <div className="flex justify-center">
                        <SearchBar className="w-full max-w-2xl" />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button className="w-full sm:w-auto bg-black text-white px-4 py-2">
                            Start Exploring
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button className="w-full sm:w-auto bg-transparent px-4 py-2 border border-gray-300">
                            API Documentation
                        </Button>
                    </div>
                </div>

                {/* Stats Section */}
                <StatsCard />

                {/* Quick Links */}
                <QuickLinks />

                {/* Recent Activity */}
                <RecentActivity />
            </div>
        </section>
    );
}
 
export default Dashboard;