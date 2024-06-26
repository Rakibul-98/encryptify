import Additive from "./components/Additive/Additive"
import Affine from "./components/Affine/Affine"
import KeyedTransposition from "./components/KeyedTransposition/KeyedTransposition"
import OneTimePad from "./components/OneTimePad/OneTimePad"
import OptionsCard from "./components/OptionsCard"
import Vigenere from "./components/Vigenere/Vigenere"

export default function Home() {

    const options = [
        { id: 1, name: "additive" },
        { id: 2, name: "affine" },
        { id: 3, name: "vigenere" },
        { id: 4, name: "keyed transposition" },
        { id: 5, name: "one time pad" },
    ]

    return (
        <div className="relative w-screen">
            <div className="relative">
                <div className="absolute inset-0 w-full h-screen bg-black bg-opacity-50"></div>
                <img className="h-screen w-full" src="https://i.ibb.co/dj5T6Hm/encryptify-banner.jpg" alt="bg-image" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-6xl font-bold mb-10"><span className="text-white bg-red-500 pb-1 pr-1">Encrypt</span><span className="text-red-500 bg-white pb-1">ify</span></h1>

                <div id="options" style={{ display: "block" }}>
                    <h3 className="mb-10 text-xl font-semibold italic text-white">Transform your secret message into a fortress of security with <span className="text-red-500 text-2xl font-bold">Encryptify</span></h3>
                    <div className="flex gap-5">
                        {
                            options.map((option, index) => {
                                return (
                                    <OptionsCard key={index} option={option}></OptionsCard>
                                )
                            })
                        }
                    </div>
                </div>
                <div id="additive" style={{ display: "none" }}>
                    <Additive />
                </div>
                <div id="affine" style={{ display: "none" }}>
                    <Affine />
                </div>
                <div id="vigenere" style={{ display: "none" }}>
                    <Vigenere />
                </div>
                <div id="keyed-transposition" style={{ display: "none" }}>
                    <KeyedTransposition />
                </div>
                <div id="one-time-pad" style={{ display: "none" }}>
                    <OneTimePad />
                </div>
            </div>
        </div>
    )
}
