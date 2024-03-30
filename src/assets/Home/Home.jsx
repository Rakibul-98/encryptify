import SearchBar from "./components/SearchBar";

export default function Home() {
    return (
        <div className="relative">
            <div className="relative">
                <div className="absolute inset-0 w-full h-screen bg-sky-300 bg-opacity-50"></div>
                <img className="h-screen" src="https://i.ibb.co/dj5T6Hm/encryptify-banner.jpg" alt="bg-image" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-6xl font-bold mb-10"><span className="text-white bg-red-500 pb-1 pr-1">Encrypt</span><span className="text-red-500 bg-white pb-1">ify</span></h1>
                <SearchBar/>
            </div>
        </div>
    )
}
