import { Search } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

type SearchProps = {
  className?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const SearchBar = ({className="", onSubmit }: SearchProps) => {
    const [query, setQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    return (  
        <form onSubmit={onSubmit} className={`flex w-full max-w-2xl space-x-2 ${className}`}>
            <div 
                className="flex h-12 w-full items-center gap-2 rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm md:text-sm focus-within:ring-2 focus-within:ring-gray-400 focus-within:border-gray-400 transition">
                <Search className="h-4 w-4 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search by block height, transaction hash, or wallet address..."
                    value={query}
                    onChange={(e) => {setQuery(e.target.value); setIsSearching(true)}}
                    className="w-full outline-none placeholder:text-gray-400"
                />
            </div>
            <Button type="submit" disabled={isSearching || !query.trim()} className="px-6 bg-black">
                {isSearching ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Search className="h-4 w-4 text-white" />
                )}
            </Button>
        </form>
    );
}
 
export default SearchBar;